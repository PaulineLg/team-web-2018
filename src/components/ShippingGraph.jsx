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
    chart: {
      caption: 'Average of your shipping',
      subCaption: 'You are a champion my friend',
      numberPrefix: '$',
    },
    data: [
      {
        label: 'Shipping delay',
        value: '880000',
      },
      {
        label: 'May',
        value: '730000',
      },
      {
        label: 'June',
        value: '590000',
      },
      {
        label: 'July',
        value: '520000',
      },
      {
        label: 'August',
        value: '330000',
      },
    ],
  };

  const chartConfigs = {
    type: 'column2d',
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
                    type="column2d"
                    dataSource={myDataSource}
                    fcLibrary={FusionCharts} // Provide FusionCharts library
                />,
            </div>
        );
    }
}

export default ShippingGraph;
