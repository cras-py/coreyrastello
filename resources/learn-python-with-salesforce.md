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
It will return your instance, eg: `crastellopy-dev-ed.develop.my.salesforce.com`

