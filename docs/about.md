---
layout: default
title: About Me
---

# Corey Rastello
# Business Data Professional

This repository contains code samples and work assets.
I've been fortunate to have been surrounded by many talented individuals over the years, and learn from them.

## About Me
I grew up in Michigans Upper Peninsula and attended Michigan Technoligical University, graduating with a degree in Finance in 2011.
I obtained my MBA from Providence College in 2015 while working full time as an Equipment Manager for the ice hockey teams.

Upon graduation I worked at Bank of America Merrill Lynch for about a year in a Call Center as an Investment Specialist.
I soon learned the phones were not for me and left in 2016.

Since then I've been employed at SaaS companies within the Vista Equity Partners and Hg Capital portfolios.
Working in business data roles in FP&A, SalesOps, RevOps, Product, Customer Success and Business Intelligence

I've worked extensively with GTM data in Salesforce since 2016. 
I'm quick to learn and understand each organizations Instance of SFDC, as they are oh so unique. 

I utilize various tools to understand, prepare, and present business data:

- Excel:
    - Power Query
    - Power Pivot
    - DAX

- python
    - Data extraction via Salesforce API
        - SOQL Queries
    - EDA with pandas, Data Wrangler
    - Data manipulation with pandas, polars, numpy, etc..
    - Data Visualization with seaborn, plotly, matplotlib
    - Salesforce Record Management via simple-salesforce

- Azure Data Factory/Azure Synapse
    - ETL Tool
        - Sources - Salesforce, Azure SQL, Pendo, ADLS
        - Sinks - Azure SQL, ADLS, Salesforce

- Alteryx
    - ETL Tool
        - Sources - Salesforce, On-Prem DBs, Azure SQL
        - Sinks - ADLS, Azure SQL, Salesforce

- PowerBI 
    - Derive and visualize insights for consumption by the Business
    - DAX
    - PowerQuery
    - Tabular Editor
    - Field Parameters


## Work History
### Upserve (Vista Equity Partners) - Providence, RI - Jul 2016-Feb 2021 (Acquired by Lightspeed)
- Financial Analyst
    - Became SME on payments processing for the Restaurant Industry
    - Analyzed payments processing data to predict future revenue and churn
    - Supported the Sales Organization by analyzing Opportunities software, hardware, and payments pricing to calculate ARR, LTV, Margin, and Payback Period to determine deal profitability and pricing strategy

- Manager, Deal Desk
    - Stood up a deal desk as organization grew to manage volume of Opportunity analyses
    - Trained Deal Desk analysts
    - Approved or denied Quotes based on deal metrics
    - Supported Pricing Strategy

- Manager, SalesOps
    - Stood up SalesOps function to perform common SalesOps tasks:
        - Compensation Planning & Administration
        - Salesforce Reporting
            - Pipline Analysis
                - Generation
                - Sales Velocity
                - Cleanliness
            - Bookings Analysis
            - Win/Loss Reporting
            - Forecasting
        - Territory Management

- Senior RevOps Analyst
    - Stepped into an IC role to support the reporting needs of the larger organization 
    - Marketing
        - Funnel Analysis
            - Speed to Lead
            - Lead Source
            - Conversion Rates
                - MAL to MQL
                - MQL to SAL
                - etc..
        - CAC
        - Cost Per Lead, Demo, Win
        - Marketing Sourced Bookings
        - Lead Recycling Initiatives
        - BDR Leaderboards
            - Dials
            - Demos Set
            - SQLs
    - Customer Success
        - Territory Assignment
        - Build Dashboards to assist with QBRs
        - Churn Analyses
        - Customer and Prospect Database (CapDB)
            - This essentially analyzes our existing customers to identify which leads to target
            - Which customers are most likely to churn?
            - Where are we sticky?
            - Where are we most profitiable? Highest Win Rates? Quickest Sales Cycle?
                - Segments
                - Industries
                - Product Mix
                - Lead Source
                - etc...

    - Sales
        - Clean Your Room
            - Stale Pipe
            - Last Activity > n Days
            - No Primary Quote
            - Push Count > n Times
            - Next Steps Blank
            - Whitespace Reporting 
            - Upsell Reporting
        - Leaderboards
            - Daily/Weekly/Monthly Bookings & Pipe Gen
            - Cold Calls Made
            - Meetings Held

### Lightspeed (NYSE: LSPD) - Providence, RI - Feb 2021-Nov 2021
- Financial Analyst, Payments
    - Moved into an FP&A Role upon acquisition to support Lightspeed's Payments Processing Initiatives
    - Consolidated reporting across our major Payments Processors/Facilitators to get access to more granular data
        - Stripe
        - Adyen
        - Vantiv
        - FirstData
    - Built models to assist in the contract negotiation process with our Processors/Facilitators
    - Managed the P&Ls for our payments business
    - Reported on Actuals vs Forecast to assist with guidance

### Poppulo (Vista Equity Partners) - Dublin, Ireland - Nov 2021-Jan 2024
- Data Analyst, Product
    - Moved to Dublin, Ireland with my wife while she pursued her MBA
    - Worked with CPO and PMs to automate their "Run the Business" reporting, and get KPIs into PowerBI
        - DAUs, MAUs, QAUs
        - Meaningful Actions
        - Product Adoption
        - Product NPS/CSAT
        - Cloud Adoption
        - EOL Initiatives
    - Worked with PMs to build dashboards marrying data from tools like Prodpad and Pendo, with Salesforce data
    - Created Custom Objects in Salesforce to send product data into our CRM to give our CSMs and AEs insights into usage and utilization

- Manager, Business Analytics
    - Promoted into role to consolidate our reporting efforts, while still supporting the Product team.
    - Previously each department had analysts working in silos
    - Managed Team of 4 Business Analysts
        - Build their Salesforce skills
            - Report Building
            - Salsforce Inspector Reloaded
                - Run SOQL Queries
                - View Object Data like Fields and Formulas
            - Requirements gathering
                - Stakeholders don't always know what they want :scream: :smile:
        - Build their PowerBI Skills
            - Modeling
                - Use Star Schemas
                - Use few Calculated Columns
                - Writing DAX for Measures

                ```
                ARR = SUM('OpportunityLineItem'[ARR_FixedRate_USD__c])
                ```
                ```
                New Bookings = 
                    CALCULATE(
                        [ARR],
                        FILTER(
                            'Opportunity',
                            'Opportunity'[StageName] = "Closed Won" &&
                            'Opportunity'[Opportunity Type] = "New"
                        )
                    )
                ```

        - Created Data Dictionary for Business KPIs in Sharepoint Site
            - Mostly Salesforce Reporting Filter Logic
                - Remove Test/Internal Accounts
                - Opportunity Stage Filters
            - Salesforce Object Key Fields
                - What Fields to use for reporting (Custom vs Standard fields)
                - Stakeholders can go in and see what field they actually need to use when the CRM may be "noisy"
                    - ARR (Let them know to use ARR_FixedRate_USD__c instead of Amount)
                    - Industry (Let them know to use ZI_Industry__c vs Industry)
                    - etc..
        
### Litera (Hg Capital) - Boston, MA - Jan 2024-Present
- Senior Data Strategist
    - We support the business reporting and analytics needs for our CS, Finance, Marketing, Sales, and Leadership Team
    - Evaluate and Improve Current Reporting Pipelines
    - Began Documenting Business Logic
    - Migrated organization off Tableau to PowerBI
    - Assited with migration from Azure SQL to Snowflake
    - Maintains business data pipelines and integrates data from M&A into existing processes
    - POC for all PowerBI requests
        - We lead all requests from start to finish acting as our own BAs and PMs
            - Gather Requirements
            - Work with Data Engineers to create Dynamic Tables or Views in Snowflake
            - Create Mockups
            - Internal QA
            - UAT with Stakeholders
            - Lead Enablement Sessions
            - Create Documentation
        - Advanced PowerBI Buils include:
            - Financial Snowball
            - Pipeline Inspector
            - Subscription Overlap
    - POC for ad hoc business requests for "large data" (1M to 100M Rows)
        - Excel Caps out around the 1M Row Limit
        - Gather Requirements with Stakeholders to see what they are trying to accomplish.
        - Create ETLs in Azure/Snowflake to satisfy requirements
        - Store csv/parquet in data lake or utilize existing EDW in Snowflake where appropriate.
        - Build Excel Reports using PowerPivot and the DataModel
        - Also connect directly to Semantic Models in the PowerBI Service
            - Allows users to work with the underlying data in their dashboards in Excel when needed
        






