import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import axios from 'axios'

// Provide FusionCharts core and other modules to resolve
ReactFC.fcRoot(FusionCharts, Charts)

Charts(FusionCharts);

const myDataSource = {
    "chart": {
      "caption": "Sales Graph",
      "subcaption": "ordered by flower",
      "paletteColors": '#F06292, #9CCC65',
      "linethickness": "2",
      "numberSuffix": "",
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
        "label": "Roses"
      }, {
        "label": "Tulips"
      }, {
        "label": "Orchid"
      }, {
        "label": "Muguet"
      }],

    }],
    "dataset": [{
      "seriesname": "By flower",
      "data": [{
        "value": "10"
      }, {
        "value": "8"
      }, {
        "value": "2"
      }, {
        "value": "26"
      }]
    }]
  }

  const chartConfigs = {
    type: 'msline',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource
  };

class SalesGraph extends Component{
    constructor(props) {
      super(props)
    }
    loadSalesMonth() {
        axios.get('https://fierce-river-71227.herokuapp.com/u/' + this.props.user.userId + '/sales/month/commandes')
        .then(response => this.setState({
          sales: response.data
        }))
        .catch(function(error) {
          console.log(error)
        })
    }
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

export default SalesGraph;
