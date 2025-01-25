# coreyrastello
This repository contains code samples and work assets created by Corey Rastello

## About Me
I've been employed at SaaS companies within the Vista Equity Partners and Hg Capital portfolio since 2016.
Working in business data roles in FP&A, SalesOps, RevOps, Product, Customer Success and Business Intelligence

I've worked extensively with GTM data in Salesforce since 2016, utilizing various tools to prepare and present data:
- Excel:
    - Power Query
    - Power Pivot
    - DAX

- python
    - Data extraction via Salesforce API
        - SOQL Queries
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
                - Stakeholders don't always know what they want :) 
        - Build their PowerBI Skills
            - Modeling
                - Use Star Schemas
                - Use few Calculated Columns
                - Writing DAX for Measures
                    - ARR = SUM('OpportunityLineItem'[ARR_FixedRate_USD__c])
                    - New Bookings = 
                        CALCULATE(
                            [ARR],
                            FILTER(
                                'Opportunity',
                                'Opportunity'[StageName] = "Closed Won" &&
                                'Opportunity'[Opportunity Type] = "New"
                            )
                        )
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
    - 




