# Learn Python with Salesforce

This document will teach you how to extract, transform , and present data from your Salesforce Instance, using python.
Gone are the days of downloading csv's and .xslx and pasting in columns and rows to your current workbooks.

## Tools we'll use

[simple-salesforce](https://simple-salesforce.readthedocs.io/en/latest/index.html) - is an open source library in python that allows us to interact with the Salesforce REST API

[pandas](https://pandas.pydata.org/docs/) - is a widely used python library for data manipulation and analysis

[NumPy (Numerical Python)](https://numpy.org/doc/stable/user/absolute_beginners.html) - is a fundamental library in Python for numerical computing. It provides powerful tools for working with arrays, especially multi-dimensional arrays, and offers a wide range of mathematical functions to operate on these arrays efficiently.

[os](https://docs.python.org/3/library/os.html) - is a module to interact with the operating system. We'll use this to get variables we've stored on our Computer. Like passwords and security tokens.

## Connecting to Salesforce

We need to import the packages we're working with first.

```python
import pandas as pd
from simple_salesforce import Salesforce
import numpy as np
import os
```

Then we need to get our username, password, and security token and create a connection to Salesforce, we'll call this `sf`

```python
sf = Salesforce(
    username=os.getenv('SFDC_USER')
    , password=os.getenv('SFDC_PASS')
    , security_token=os.getenv('SFDC_TOKEN')
)
```

We can verify we've connected to out instance by entering `print(sf.sf_instance)`
It will return your instance, eg: 
`crastellopy-dev-ed.develop.my.salesforce.com`

## Getting Data

We can either request the report

```python
from simple_salesforce import Salesforce
import requests
import pandas as pd
from io import StringIO
import os

sf = Salesforce(
    username=os.getenv('SFDC_USER')
    , password=os.getenv('SFDC_PASS')
    , security_token=os.getenv('SFDC_TOKEN')
)

sf_instance = 'https://yoursalesforceinstance.my.salesforce.com/' #Your Salesforce Instance URL
reportId = '00O4X000000x123456' #Enter Your Report Id Here (18 Character)
export = '?isdtp=p1&export=1&enc=UTF-8&xf=csv'
sfUrl = sf_instance + reportId + export
response = requests.get(sfUrl, headers=sf.headers, cookies={'sid': sf.session_id})
download_report = response.content.decode('utf-8')
separator = "\n\n\n" ### they report info is separated by 3 new line characters, we dont want this at the end of the df
try:
    separator_index = download_report.rfind(separator)  # Use rfind to find the *last* occurrence

    if separator_index != -1: #check if the separator was found
        data_part = download_report[:separator_index]
        df1 = pd.read_csv(StringIO(data_part))
    else:
        raise ValueError("Separator not found") # Or handle as you see fit

except ValueError as e:  # Separator not found
    print(f"Error: {e}")  # Print the error message
    df1 = pd.DataFrame()
df1.head()
```
By Calling `df1.head()` we can display the first 5 rows of the report

|    | Product Name   | Product Code   | Product Category   | Product Group   | Line of Business   | Case Safe ID       |
|---:|:---------------|:---------------|:-------------------|:----------------|:-------------------|:-------------------|
|  0 | Core Software  | SW-C           | Software           | Core            | Core               | 01t4X0000012345678 |
|  1 | Pro Software   | SW-P           | Software           | Pro             | Pro                | 01t4X0000012345679 |
|  2 | Implementation | IMP            | Services           | Services        | Services           | 01t4X0000012345680 |
|  3 | Hardware A     | HW-A           | Hardware           | Terminals       | Hardware           | 01t4X0000012345681 |
|  4 | Hardware B     | HW-B           | Hardware           | Printers        | Hardware           | 01t4X0000012345682 |

This is fine, but frequently you'll want to write a query to retrieve the data.

We can do this via SOQL (Salesforce Object Query Language).
[SOQL](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm) is a SQL like language specific to Salesforce instances.

We've also created a [UDF](https://www.geeksforgeeks.org/python-user-defined-functions/) (User Defined Function) in the below code to execute the query.
A UDF is a set of statements that take inputs, do some specific computation, and produce output. The idea is to put some commonly or repeatedly done tasks together and make a function so that instead of writing the same code again and again for different inputs, we can call the function.

```python
from simple_salesforce import Salesforce
import requests
import pandas as pd
from io import StringIO
import os
import numpy as np

sf = Salesforce(
    username=os.getenv('SFDC_USER')
    , password=os.getenv('SFDC_PASS')
    , security_token=os.getenv('SFDC_TOKEN')
)

# Our UDF to handle the results returned from Salesforce
def sf_api_query(soql, dateList=None, tz=None):
    data = sf.query_all(soql)
    try:
        df = pd.DataFrame(data["records"]).drop("attributes", axis=1)
        listColumns = list(df.columns)
        for col in listColumns:
            if any(
                isinstance(df[col].values[i], dict)
                for i in range(0, len(df[col].values))
            ):
                df = pd.concat(
                    [
                        df.drop(columns=[col]),
                        df[col]
                        .apply(pd.Series)
                        .drop("attributes", axis=1)
                        .add_prefix(col + "."),
                    ],
                    axis=1,
                )
                new_columns = np.setdiff1d(df.columns, listColumns)
                for i in new_columns:
                    listColumns.append(i)
        try:
            for date in dateList:
                if max(df[date].str.len()) > 10:
                    try:
                        df[date] = (
                            pd.to_datetime(df[date])
                            .dt.tz_convert(tz)
                            .dt.tz_localize(None)
                        )
                    except:
                        pass
                else:
                    try:
                        df[date] = pd.to_datetime(df[date])
                    except:
                        pass
        except:
            pass
        return df
    except:
        print("The Query returned 0 rows")

# our SOQL query
soql = '''
    SELECT 
    Id
    ,Name
    ,CloseDate
    ,CreatedDate
    ,Account.Name 
    FROM Opportunity 
    WHERE IsClosed = false 
    LIMIT 20
'''

df = sf_api_query(soql,dateList=['CloseDate','CreatedDate'],tz='America/Chicago')
```
Again, calling `df.head()` will diplay the first 5 rows of the dataframe

|    | Id                 | Name                                        | CloseDate           | CreatedDate         |   Account.Name |
|---:|:-------------------|:--------------------------------------------|:--------------------|:--------------------|---------------:|
|  0 | 0064x0000000000000 | Upsell AB                                   | 2024-03-13 00:00:00 | 2022-03-14 12:52:17 |            ABC |
|  1 | 0064x0000000000001 | Renewal Opportunity ABC - Jan 2025          | 2025-01-01 00:00:00 | 2024-08-18 13:26:37 |            ABC |
|  2 | 0064x0000000000002 | X-Sell A                                    | 2069-10-27 00:00:00 | 2024-10-24 07:31:48 |            A12 |
|  3 | 0064x0000000000003 | General Company 1 Upsell ABCD               | 2024-11-25 00:00:00 | 2024-11-18 14:11:49 |            DEF |
|  4 | 0064x0000000000004 | Customer ABC New Logo Pro Software Hardware | 2025-03-28 00:00:00 | 2025-01-08 09:38:18 |            GHI |

Notice here we have the API Name of the field as columns now.
Using a SOQL Query will return the API Name, not the Label.
We'll cover how to rename columns later.

Also notice I didn't have to write any joins to retrieve data from the Account Table, even though I queried the Opportunity.
Salesforce already knows how the relationships are structured.

You'll never write a join in SOQL.

We'll cover joing later we'll be using `pd.merge()` to join dataframes together.

## Working With Data
