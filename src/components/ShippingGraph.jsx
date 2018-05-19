import React, {Component} from 'react';

import logo from '../crepe.png';

import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

// Provide FusionCharts core and other modules to resolve
ReactFC.fcRoot(FusionCharts, Charts)

Charts(FusionCharts);   

const myDataSource = {
    "chart": {
      "caption": "Shipping Graph",
      "subcaption": "Average of time delivery",
      "paletteColors": '#F06292, #9CCC65',
      "linethickness": "2",
      "numberSuffix": " days",
      "showvalues": "0",
      "formatnumberscale": "0",
      "bgColor": "#D5F5E3",
      "labeldisplay": "ROTATE",
      "slantlabels": "1",
      "divLineAlpha": "40",
      "animation": "1",
      "drawCrossLine": "1",
      "crossLineColor": "#0d0d0d",
      "crossLineAlpha": "100",
      "canvasBgColor": '#D4EFDF',
      "showCanvasBorder":"0",
      "showBorder": "0",
      "showLegend": "1",

      "legendBgAlpha": "0",
      "legendBorderAlpha": "0",
      "legendShadow": "0",
      "legendItemFontSize": "10",
      "legendItemFontColor": "#666666",
      "drawCustomLegendIcon": "1",
      "legendIconAlpha": "50",
      "legendIconBorderColor": "#123456",
      "legendIconBorderThickness": "3",
      "legendIconSides": "7",
      "legendIconStartAngle": "60",
               
     },
    "categories": [{
      "category": [{
        "label": "Order 01"
      }, {
        "label": "Order 02"
      }, {
        "label": "Order 03"
      }, {
        "label": "Order 04"
      }, {
        "label": "Order 05"
      }, {
        "label": "Order 06"
      }, {
        "label": "Order 07"
      }, {
        "label": "Order 08"
      }, {
        "label": "Order 09"
      }]
    }],
    "dataset": [{
      "seriesname": "Expected time",
      "data": [{
        "value": "3"
      }, {
        "value": "5"
      }, {
        "value": "7"
      }, {
        "value": "2"
      }, {
        "value": "9"
      }, {
        "value": "3"
      }, {
        "value": "8"
      }, {
        "value": "4"
      }, {
        "value": "8"
      }, {
        "value": "5"
      }]
    }, {
      "seriesname": "Effective time",
      "data": [{
        "value": "4"
      }, {
        "value": "2"
      }, {
        "value": "9"
      }, {
        "value": "6"
      }, {
        "value": "5"
      }, {
        "value": "6"
      }, {
        "value": "7"
      }, {
        "value": "8"
      }, {
        "value": "9"
      }, {
        "value": "1"
      }, {
        "value": "632200"
      }]
    }]
  }

  const chartConfigs = {
    type: 'msline',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
  };

class ShippingGraph extends Component{
    render(){
        const sidebarBackground = {
            backgroundColor: 'blue'
        };
        return (
            <div>
                <ReactFC
                    width="600"
                    height="400"
                    type="msline"
                    dataSource={myDataSource}
                    fcLibrary={FusionCharts} // Provide FusionCharts library
                />
            </div>
        );
    }
}

export default ShippingGraph;
