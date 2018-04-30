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
      "linethickness": "3",
      "numberSuffix": " days",
      "showvalues": "0",
      "formatnumberscale": "0",
      "labeldisplay": "ROTATE",
      "slantlabels": "1",
      "divLineAlpha": "40",
      "anchoralpha": "0",
      "animation": "1",
      "legendborderalpha": "20",
      "drawCrossLine": "1",
      "crossLineColor": "#0d0d0d",
      "crossLineAlpha": "100",
      "tooltipGrayOutColor": "#80cfff",
      "theme": "zune"
    },
    "categories": [{
      "category": [{
        "label": "Commande 01"
      }, {
        "label": "Commande 02"
      }, {
        "label": "Commande 03"
      }, {
        "label": "Commande 04"
      }, {
        "label": "Commande 05"
      }, {
        "label": "Commande 06"
      }, {
        "label": "Commande 07"
      }, {
        "label": "Commande 08"
      }, {
        "label": "Commande 09"
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
                Shipping Graph
                <ReactFC
                    width="600"
                    height="400"
                    type="msline"
                    dataSource={myDataSource}
                    fcLibrary={FusionCharts} // Provide FusionCharts library
                />,
            </div>
        );
    }
}

export default ShippingGraph;
