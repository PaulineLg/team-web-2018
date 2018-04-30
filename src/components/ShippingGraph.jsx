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
      "caption": "Worldwide Smartphone Sales to End Users from 2011 to 2015",
      "subcaption": "By Top 3 Vendors",
      "linethickness": "2",
      "numberPrefix": "$",
      "showvalues": "0",
      "formatnumberscale": "1",
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
        "value": "716000"
      }, {
        "value": "771700"
      }, {
        "value": "687800"
      }, {
        "value": "698300"
      }, {
        "value": "826100"
      }, {
        "value": "938300"
      }, {
        "value": "892800"
      }, {
        "value": "904300"
      }, {
        "value": "979600"
      }, {
        "value": "1069600"
      }, {
        "value": "1006600"
      }, {
        "value": "1075300"
      }, {
        "value": "1170500"
      }, {
        "value": "1192100"
      }, {
        "value": "1100500"
      }, {
        "value": "974200"
      }, {
        "value": "936200"
      }, {
        "value": "979900"
      }, {
        "value": "887400"
      }, {
        "value": "1020600"
      }]
    }, {
      "seriesname": "Effective time",
      "data": [{
        "value": "1174600"
      }, {
        "value": "1222800"
      }, {
        "value": "1075600"
      }, {
        "value": "978700"
      }, {
        "value": "1053500"
      }, {
        "value": "1117000"
      }, {
        "value": "831600"
      }, {
        "value": "834200"
      }, {
        "value": "823000"
      }, {
        "value": "850500"
      }, {
        "value": "632200"
      }, {
        "value": "609500"
      }, {
        "value": "630600"
      }, {
        "value": "635800"
      }, {
        "value": "496900"
      }, {
        "value": "438100"
      }, {
        "value": "431300"
      }, {
        "value": "330000"
      }, {
        "value": "276900"
      }, {
        "value": "302900"
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
