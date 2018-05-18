import React, {Component} from 'react';

import logo from '../crepe.png';

import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.widgets.js';
import ReactFC from 'react-fusioncharts';

// Provide FusionCharts core and other modules to resolve
ReactFC.fcRoot(FusionCharts, Charts)

Charts(FusionCharts); 

const myDataSource = {
    "chart": {
        "caption": "Stock of seeds",
        "subCaption": "July",
        "showPercentInTooltip": "0",
        "decimals": "1",
        "paletteColors": '#F06292, #F4D03F, #9CCC65,  #CD6155',
        "useDataPlotColorForLabels": "1",
        "bgColor": "#D5F5E3",
        "showBorder": "0"
    },
    "data": [
        {
            "label": "Roses",
            "value": "50"
        },
        {
            "label": "Tulipes",
            "value": "10"
        },
        {
            "label": "Muguet",
            "value": "60"
        },
        {
            "label": "Orchidées",
            "value": "90"
        }
    ]
}

const chartConfigs = {
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: myDataSource
}

class StockSeeds extends Component{
    render(){
        return (
        <div>
            <ReactFC
            width="400"
            height="400"
            type="pie2d"
            dataSource={myDataSource}
            fcLibrary={FusionCharts} // Provide FusionCharts library
            />,
        </div>
        );
    }
}

export default StockSeeds;