import React, {Component} from 'react';

import logo from '../crepe.png';

import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

// Provide FusionCharts core and other modules to resolve
ReactFC.fcRoot(FusionCharts, Charts)

Charts(FusionCharts);   

const myDataSource =
    {
        "chart": {
            "caption": "Seeds Growth compare to seed sold",
            "subCaption": "Data per plants",
            "xAxisName": "Plants",
            "yAxisName": "Number of stock",
            "paletteColors": "#3333ff,#6666ff",
            "bgColor": "#ffffff",
            "showAlternateHGridColor": "0",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "baseFontColor": "#020202",
            "baseFont": "Helvetica Neue,Arial",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "usePlotGradientColor": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5",
            "legendBgAlpha": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendItemFontSize": "10",
            "legendItemFontColor": "#666666",
            "legendCaptionFontSize": "9",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineDashed": "1",
            "divLineDashLen": "1",
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Tulipes"
                    },
                    {
                        "label": "Rose"
                    },
                    {
                        "label": "Muguet"
                    },
                    {
                        "label": "Orchidées"
                    },
                    {
                        "label": "Pissenli"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesname": "Seed Growth",
                "allowDrag": "0",
                "data": [
                    {
                        "value": "20"
                    },
                    {
                        "value": "40"
                    },
                    {
                        "value": "35"
                    },
                    {
                        "value": "40"
                    },
                    {
                        "value": "20"
                    }
                ]
            },
            {
                "seriesname": "Plants sold",
                "dashed": "1",
                "data": [
                    {
                        "value": "50"
                    },
                    {
                        "value": "65"
                    },
                    {
                        "value": "45"
                    },
                    {
                        "value": "32"
                    },
                    {
                        "value": "10"
                    }
                ]
            }
        ]
    }

  const chartConfigs = {
    type: 'mscolumn2d',
    width: 600,
    height: 400,
    dataFormat: 'json', 
    dataSource: myDataSource,
  };

class UpkeepPlants extends Component{
    render(){
        const sidebarBackground = {
            backgroundColor: 'blue'
        };
        return (
            <div>
                UpkeepPlants Graph
                <ReactFC
                    width="600"
                    height="400"
                    type="mscolumn2d"
                    dataSource={myDataSource}
                    fcLibrary={FusionCharts} // Provide FusionCharts library
                />,
            </div>
        );
    }
}

export default UpkeepPlants;
