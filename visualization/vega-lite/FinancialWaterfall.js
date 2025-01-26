{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {"text": "Financial Snowball LTM"},
  "data": {
      "values": [
          {"Year":2022,"Stage":"Beginning ARR","StageSort":1,"Amount":125000000},
          {"Year":2022,"Stage":"Customer churn","StageSort":2,"Amount":-7000000},
          {"Year":2022,"Stage":"Downsell","StageSort":3,"Amount":-2000000},
          {"Year":2022,"Stage":"Product churn","StageSort":4,"Amount":-1000000},
          {"Year":2022,"Stage":"GRR","StageSort":5,"Amount":0},
          {"Year":2022,"Stage":"Cross-sell","StageSort":6,"Amount":5000000},
          {"Year":2022,"Stage":"Upsell","StageSort":7,"Amount":7000000},
          {"Year":2022,"Stage":"Product Migration","StageSort":9,"Amount":5000000},
          {"Year":2022,"Stage":"NRR","StageSort":10,"Amount":0},
          {"Year":2022,"Stage":"New Customer","StageSort":11,"Amount":2500000},
          {"Year":2022,"Stage":"Fx","StageSort":12,"Amount":400000},
          {"Year":2022,"Stage":"Ending ARR","StageSort":13,"Amount":0},
          {"Year":2023,"Stage":"Beginning ARR","StageSort":1,"Amount":134900000},
          {"Year":2023,"Stage":"Customer churn","StageSort":2,"Amount":-5000000},
          {"Year":2023,"Stage":"Downsell","StageSort":3,"Amount":-1000000},
          {"Year":2023,"Stage":"Product churn","StageSort":4,"Amount":-750000},
          {"Year":2023,"Stage":"GRR","StageSort":5,"Amount":0},
          {"Year":2023,"Stage":"Cross-sell","StageSort":6,"Amount":3000000},
          {"Year":2023,"Stage":"Upsell","StageSort":7,"Amount":5000000},
          {"Year":2023,"Stage":"Product Migration","StageSort":9,"Amount":3000000},
          {"Year":2023,"Stage":"NRR","StageSort":10,"Amount":0},
          {"Year":2023,"Stage":"New Customer","StageSort":11,"Amount":12000000},
          {"Year":2023,"Stage":"Fx","StageSort":12,"Amount":-2000000},
          {"Year":2023,"Stage":"Ending ARR","StageSort":13,"Amount":0},
          {"Year":2024,"Stage":"Beginning ARR","StageSort":1,"Amount":149150000},
          {"Year":2024,"Stage":"Customer churn","StageSort":2,"Amount":-4250000},
          {"Year":2024,"Stage":"Downsell","StageSort":3,"Amount":-750000},
          {"Year":2024,"Stage":"Product churn","StageSort":4,"Amount":-3750000},
          {"Year":2024,"Stage":"GRR","StageSort":5,"Amount":0},
          {"Year":2024,"Stage":"Cross-sell","StageSort":6,"Amount":850000},
          {"Year":2024,"Stage":"Upsell","StageSort":7,"Amount":2650000},
          {"Year":2024,"Stage":"Product Migration","StageSort":9,"Amount":750000},
          {"Year":2024,"Stage":"NRR","StageSort":10,"Amount":0},
          {"Year":2024,"Stage":"New Customer","StageSort":11,"Amount":13750000},
          {"Year":2024,"Stage":"Fx","StageSort":12,"Amount":475000},
          {"Year":2024,"Stage":"Ending ARR","StageSort":13,"Amount":0}
      ]
    },
  "transform": [
    {
      "window": [
        {
          "op": "sum",
          "field": "Amount",
          "as": "RunningTotal"
        }
      ],
      "groupby": ["Year"],
      "sort": [
        { "field": "Year", "order": "ascending" },
        { "field": "StageSort", "order": "ascending" }
      ]
    },
    {
      "calculate": "datum.Stage == 'GRR' || datum.Stage == 'NRR' || datum.Stage == 'Ending ARR' || datum.Stage == 'Beginning ARR' ? 0 : datum.RunningTotal - datum.Amount",
      "as": "PreviousTotal"
    },
    {
      "calculate": "datum.Stage == 'GRR' || datum.Stage == 'NRR' || datum.Stage == 'Ending ARR' || datum.Stage == 'Beginning ARR' ? datum.RunningTotal : datum.Amount",
      "as": "LabelAmount"
    },
    {
      "calculate": "(datum.RunningTotal + datum.PreviousTotal) / 2",
      "as": "Center"
    },
    {
      "calculate": "(datum.StageSort != 12 && datum.LabelAmount > 0 ? '' : '') + if(abs(datum.LabelAmount) < 100000000, format(datum.LabelAmount/1000, ',.0f') +'K', format(datum.LabelAmount/1000, ',.0f')+'K')",
      "as": "AmountLabels"
    }
  ],
  "facet": {
    "field": "Year",
    "type": "ordinal",
    "header": {
      "labelFontSize": 18,
      "labelFontWeight": "bold",
      "labelAlign": "center",
      "labelOrient": "bottom",
      "title": null
    }
  },
  "spec": {
    "width": 380,
    "height": 300,
    "layer": [
      {
        "mark": "bar",
        "encoding": {
          "x": {
            "field": "Stage",
            "type": "nominal",
            "sort": { "field": "StageSort" },
            "axis": { "title": null, "labelAngle": 270 }
          },
          "y": {
            "field": "PreviousTotal",
            "type": "quantitative",
            "axis": { "format": "$.2s", "title": "ARR" }
          },
          "y2": { "field": "RunningTotal" },
          "color": {
            "field": "Stage",
            "scale": {
              "domain": [
                "Beginning ARR",
                "Customer churn",
                "Downsell",
                "Product churn",
                "GRR",
                "Cross-sell",
                "Upsell",
                "Product Migration",
                "NRR",
                "New Customer",
                "Fx",
                "Ending ARR"
              ],
              "range": [
                "#b0b0b0",
                "#d824a9",
                "#d824a9",
                "#d824a9",
                "#D3D3D3",
                "#5dbaa9",
                "#5dbaa9",
                "#5dbaa9",
                "#D3D3D3",
                "#5dbaa9",
                "#FFA500",
                "#b0b0b0"
              ]
            },
            "legend": null
          },
          "tooltip": [
            { "field": "Stage", "title": " " },
            { "field": "LabelAmount", "format": "$,.0f", "title": "Amount" },
            { "field": "# Customers", "format": "#,.0f", "title": "# Customers" }
          ]
        }
      },
      {
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "middle",
          "fontSize": 12,
          "dx": 10,
          "dy": 0,
          "angle": 270
        },
        "encoding": {
          "x": {
            "field": "Stage",
            "type": "nominal",
            "sort": { "field": "StageSort" }
          },
          "y": {
            "field": "RunningTotal",
            "type": "quantitative"
          },
          "text": {
            "field": "AmountLabels",
            "type": "nominal"
          }
        }
      }
    ]
  },
  "config": {
    "background": "white",
    "view": { "stroke": null },
    "padding": { "top": 20, "bottom": 20, "left": 20, "right": 20 },
    "font": "Arial",
    "title": {"anchor": "start", "fontSize": 35, "offset": 5},
    "axis": { "ticks": false, "labelFontSize": 14, "labelPadding": 10 },
    "axisX": {
      "domainOpacity": 0.9,
      "labelAngle": 270,
      "title": null
    },
    "axisY": {
      "domain": false,
      "gridOpacity": 0.5,
      "tickCount": 8,
      "titleFontSize": 18,
      "titlePadding": 15
    }
  }
}