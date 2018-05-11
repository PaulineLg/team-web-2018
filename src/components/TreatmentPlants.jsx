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
        "theme": "fint",
        "caption": "Health of your plant",
        "subcaption": "The degree of good health of your plants",
        "lowerLimit": "0",
        "upperLimit": "100",
        "numberSuffix": "%",
        "chartBottomMargin": "40",
        "valueFontSize": "11",
        "valueFontBold": "0"
    },
    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": "35",
            "label": "Good",
        }, {
            "minValue": "35",
            "maxValue": "70",
            "label": "Moderate",
        }, {
            "minValue": "70",
            "maxValue": "100",
            "label": "Bad",
        }]
    },
    "pointers": {
        "pointer": [{
            "value": "12"
        }]
    },
    "trendPoints": {
        "point": [
            //Trendpoint
            {
                "startValue": "70",
                "displayValue": " ",
                "dashed": "1",
                "showValues": "0"
            }, {
                "startValue": "85",
                "displayValue": " ",
                "dashed": "1",
                "showValues": "0"
            },
            //Trendzone
            {
                "startValue": "70",
                "endValue": "85",
                "displayValue": " ",
                "alpha": "40"
            }
        ]
    },
    "annotations": {
        "origw": "400",
        "origh": "190",
        "autoscale": "1",
        "groups": [{
            "id": "range",
            "items": [{
                "id": "rangeBg",
                "type": "rectangle",
                "x": "$chartCenterX-115",
                "y": "$chartEndY-35",
                "tox": "$chartCenterX +115",
                "toy": "$chartEndY-15",
                "fillcolor": "#0075c2"
            }, {
                "id": "rangeText",
                "type": "Text",
                "fontSize": "11",
                "fillcolor": "#ffffff",
                "text": "Recommended Utilization Range : 70% - 85%",
                "x": "$chartCenterX",
                "y": "$chartEndY-25"
            }]
        }]
    }
}

const chartConfigs = {
    type: 'hlineargauge',
    renderAt: 'chart-container',
    id: 'cpu-linear-gauge-1',
    width: '400',
    height: '190',
    dataFormat: 'json',
    dataSource: myDataSource
  };

class TreatmentPlants extends Component{
    render(){
        return (
        <div>
            Treatments
            <ReactFC
            width="400"
            height="190"
            type="hlineargauge"
            dataSource={myDataSource}
            fcLibrary={FusionCharts} // Provide FusionCharts library
            />,
        </div>
        );
    }
}

export default TreatmentPlants;
