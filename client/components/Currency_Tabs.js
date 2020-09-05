import React, {useCallback, useState} from 'react';
import {Card, Tabs, Layout} from '@shopify/polaris';
import {HorizontalBar, Line, Doughnut, Bar} from 'react-chartjs-2';
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
//import "../style/styles.css";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';




const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const doughnutChartData = {
  labels: ['USD/CNH will trend lower', 'USD/CNH will trend higher'],
  datasets: [
    {
      backgroundColor: ["#FF6D2D","#45853C"],
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2,
      data: [28, 72],

    }
  ],
};
  
const doughnutChartOptions = {
  maintainAspectRatio: true,
  cutoutPercentage:70,
  tooltips:{
    enabled:false,
  },
  legend: {
            display: false,
          },
  pieceLabel: {
    render: 'value' + '%',
    fontColor: "white",
  }
  };

var lineChartData = {
  labels: ['04-19', '04-22', '04-25', '04-28', '05-01', '05-04', '05-07', '05-10', '05-13'],
  datasets: [{
    type: "bar",
    label: "real",
    fill: false,
    lineTension: 0,
    backgroundColor: "rgb(1, 2, 58)",
    borderColor: "rgb(1, 2, 58)",
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: "rgb(1, 2, 58)",
    pointBackgroundColor: "rgb(1, 2, 58)",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgb(1, 2, 58)",
    pointHoverBorderColor: "rgb(1, 2, 58)",
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    pointHitRadius: 10,
    // notice the gap in the data and the spanGaps: false
    data: [1, 2, 3, 4, 3, 2, 4, 3, 1],
    spanGaps: false,
    },
    {
      type: "line",
      label: "real",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(1, 2, 58)",
      borderColor: "rgb(1, 2, 58)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgb(1, 2, 58)",
      pointBackgroundColor: "rgb(1, 2, 58)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(1, 2, 58)",
      pointHoverBorderColor: "rgb(1, 2, 58)",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: false
      data: [7, 7.1005, 7.0906, 7.0879, 7.1372, 7.1542, 7.1257, 7.1673, 7.1562],
      spanGaps: false,
      }

  ]
  };

var lineChartOptions = {
  maintainAspectRatio: true,
  tooltips:{
    enabled:true,
  },
  legend: {
    display: false,
  },
  scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                },
                scaleLabel: {
                      display: false,
                      labelString: 'USD/CNH',
                      fontSize: 20 
                  }
            }],
            xAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            },],            
        },
        layout: {
          padding: {
              left: 0,
              right: 50,
              top: 0,
              bottom: 0
          }
      }   
};



const barChartData = {
  labels: ['China - Monthly CPI', 'US - Monthly CPI', 'China - Quarterly GDP',
            'US - Aaa Corporate Bonds', 'US - S&P 500'],
  datasets: [
    {
      backgroundColor: ["#ffa41b", '#005082','#ff5733','#708160','#00a8cc'],
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2,
      data: [0.65, 0.50, 0.47, 0.39, 0.37]
    }
  ],
};

const barChartOptions = {

  legend: {
            display: false,
          },

  scales: {
            xAxes: [{
              ticks: {
                min: 0,
                max: 1,
                callback: function(value) {
                    return value
                }
              },
              scaleLabel: {
                display: true,
                labelString: "Correlation Coefficient (Absolute Value)"
              }
            },],
            yAxes: [{
              barPercentage: 0.3,
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            },],
          },
  
};




export default function Tab() {
    const [selected, setSelected] = useState(0);
    const [content, setContent] = useState("");
  
    const handleTabChange = useCallback(
      (selectedTabIndex) => setSelected(selectedTabIndex),
      [],
    );
  
   const tabs = [
      {
        id: 'Map',
        content: 'Map',
      },
      {
        id: 'GBP',
        content: 'GBP',
      },
      {
        id: 'EUR',
        content: 'EUR',
      },
      {
        id: 'CAD',
        content: 'CAD',
      },
    ];



  
    return (
      
      <div className="main_background_image">
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted={false}>
          {selected == 0? (
                    
                     <div>
                       <p> Revenue Sensitivity to Price Changes (Exchange Rate Fluctuations)</p>
                        <MapChart setTooltipContent={setContent} />
                          <ReactTooltip>{content}</ReactTooltip>  
                          <p>Price Volatilities</p>
                        <MapChart setTooltipContent={setContent} />
                          <ReactTooltip>{content}</ReactTooltip>  
              
                          
              
                          </div>
                          
                      
          
        
          ):(
            <Layout>
            <Layout.Section oneHalf>
                <Bar 
                  height="170vh"
                  data={lineChartData}
                  options={lineChartOptions}
                />
                <Doughnut
                    height="100vh"
                    data={doughnutChartData}
                    options={doughnutChartOptions}
                />
  
            </Layout.Section>
            <Layout.Section oneHalf>
                <HorizontalBar 
                    height="170vh"
                    data={barChartData}
                    options={barChartOptions}
                  />
                <Doughnut
                    height="100vh"
                    data={doughnutChartData}
                    options={doughnutChartOptions}
                />
            </Layout.Section>
          </Layout>

          )}

        
        </Tabs>
      </Card>
      </div>
    );
  }

