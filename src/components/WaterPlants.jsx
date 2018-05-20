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
            "manageresize": "1",
            "bgColor": "#EAFAF1",
            "bgalpha": "100",
            "showborder": "0",
            "lowerlimit": "0",
            "upperlimit": "100",
            "showtickmarks": "0",
            "showtickvalues": "0",
            "showlimits": "0",
            "numbersuffix": "%",
            "decmials": "0",
            "cylfillcolor": "#5DADE2",
            "chartleftmargin": "15",
            "chartrightmargin": "15",
            "charttopmargin": "15",
          
        },
        "value": "44",
        "annotations": {
            "groups": [
                {
                    "showbelow": "1",
                    "items": [
                        {
                            "type": "rectangle",
                            "x": "$chartStartX+1",
                            "y": "$chartStartY+1",
                            "tox": "$chartEndX-1",
                            "toy": "$chartEndY-1",
                            "color": "FFFFFF",
                            "alpha": "0",
                            "showborder": "0",
                            "bordercolor": "CC0000",
                            "borderthickness": "2"
                        }
                    ]
                }
            ]
        }
    }

const chartConfigs = {
    type: 'cylinder',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
  };

class WaterPlants extends Component{
    render(){
        return (
        <div>
            <ReactFC
            width="400"
            height="300"
            type="cylinder"
            dataSource={myDataSource}
            fcLibrary={FusionCharts} // Provide FusionCharts library
            />,
        </div>
        );
    }
}

export default WaterPlants;
