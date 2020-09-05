import React, {useCallback, useState} from 'react';
import {Card, Layout, Caption, TextStyle,DisplayText, Select} from '@shopify/polaris';
import {HorizontalBar, Doughnut, Bar} from 'react-chartjs-2';
import store from 'store-js';
//import '../style/style.css'
const getPearsonCorrelation = require('../functions/calc_correlation')
const string_to_list = require('../functions/string_to_list')
const fetch_from_map = require('../functions/fetch_from_map')




export default function Country_data(props) {  

    const [selected, setSelected] = useState('all');
    const handleSelectChange = useCallback((value) => setSelected(value), []);
    console.log('props.product_id_title_map is ', props.product_id_title_map)
    var options = fetch_from_map(props.select, props.tabs, props.maps, props.product_id_title_map, selected)
    
  
    /*
    options = [
    {label: 'All products', value: 'allProducts'},
    {label: 'Oldest update', value: 'oldestUpdate'},
    {label: 'Most spent', value: 'mostSpent'},
    {label: 'Most orders', value: 'mostOrders'},
    {label: 'Last name A–Z', value: 'lastNameAlpha'},
    {label: 'Last name Z–A', value: 'lastNameReverseAlpha'},
    ];*/

    console.log("options are ", options)
    console.log("selected from dropdown is ", selected)
    console.log("on tab ", props.select)
    console.log("tabs are ", props.tabs)
    console.log("map is ", props.maps)
    

    


    const date_string = localStorage.getItem('date')
    const price_string = localStorage.getItem('price')
    const exchange_rate_string = localStorage.getItem('exchange_rate')
    const current_level_string = localStorage.getItem('current_level')
    const correlation = localStorage.getItem('correlation')

    var date = []
    var price = []
    var exchange_rate = []
    var current_level = []

    var min_bar = 0
    var max_bar = 0
    var min_line = 0
    var max_line = 0


    if (date_string.includes(',')){
        date = string_to_list(localStorage.getItem('date'),'')
        price = string_to_list(store.get('price'),'float')
        exchange_rate = string_to_list(store.get('exchange_rate'),'float')
        current_level = string_to_list(store.get('current_level'),'float')
        
        min_bar = Math.min.apply(Math, price)*0.8
        max_bar = (Math.max.apply(Math, price)-min_bar)*2.2+min_bar

        max_line = Math.max.apply(Math, exchange_rate)
        min_line = max_line - (max_line - Math.min.apply(Math, exchange_rate) )*2.2

        console.log("y is ", [min_bar, max_bar, min_line, max_line])
        

    } else {
        date = [date_string]
        price = [price_string]
        exchange_rate = [exchange_rate_string]
        current_level = string_to_list(store.get('current_level'),'float')
    }

    

    
    //const level = store.get('level') 
    var r = parseInt(Math.min(Math.abs(parseFloat(correlation)), 1) * 100)
    //r = parseInt(Math.min(Math.abs(getPearsonCorrelation([34,37,24,67,42 ],[1.23,1.22, 1.23, 1.24, 1.25])), 1) * 100)
    const doughnut = [r, 100-r]
    

    var leve_num1 = [Math.max(current_level[0]*100-2,0), Math.max(current_level[1]*100-2,0), Math.max(current_level[2]*100-2,0), Math.max(current_level[3]*100-2,0)]
    //console.log("level-num1 is ", leve_num1)
    var leve_num3 = [98-leve_num1[0],98-leve_num1[1],98-leve_num1[2],98-leve_num1[3]]
    //console.log("level-num3 is ", leve_num3)
    const leve_num2 = [2, 2, 2, 2]


    /*
    console.log("date is ", date)
    console.log("price is ", price)
    console.log("exchange_rate is ", exchange_rate)
    console.log("current_level is ", current_level)
    console.log("correlation is ", correlation)*/
 
    
    var color = ''
    var text = ''
    if (r < 30){
        color = '#63b7af'
        text = 'LOW'
    } else if (r < 60){
        color = '#ffa41b'
        text = 'MODERATE'
    } else {
        color = '#ff6f5e'
        text = 'HIGH'
    }
    
    
    
    const doughnutChartData = {
      labels: [text+': '+r],
      datasets: [
        {
          //backgroundColor: ["#FF6D2D","#45853C"],
          backgroundColor: [color,"#FFFFFF"],
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 2,
          data: doughnut,
    
        }
      ],
    };
      
    const doughnutChartOptions = {
      circumference: 1* Math.PI,
      rotation: Math.PI,
      maintainAspectRatio: true,
      cutoutPercentage:80,
      tooltips:{
        enabled:false,
      },
      legend: {
                display: true,
                position: 'bottom',
                align:'center',
                labels:{
                    fontSize: 20,
                    boxWidth: 0,
                    fontColor: '#222831'
                }
              },
      pieceLabel: {
        render: 'value' + '%',
        fontColor: "white",
      },
    layout: {
        padding: {
            left: 80,
            right: 20,
            top: 20,
            bottom: 20
        }
    } 
      };
    
    var lineChartData = {
      //labels: ["2020-05-08", "2020-05-09", "2020-05-10"],
      labels: date,
      //lables: [price[0],price[1],price[2]],
      datasets: [{
        yAxisID: 'A',
        type: "bar",
        label: "sales in store currency",
        fill: false,
        lineTension: 0,
        backgroundColor: "#63b7af",
        borderColor: "#63b7af",
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
        //data: [89.54, 96.8, 246.51],
        data: price,
        //data: [store.get('price')],
        spanGaps: false,
        barPercentage: 0.3
        },
        {
          yAxisID: 'B',
          type: "line",
          label: "product price",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "#ee8572",
          borderColor: "#ee8572",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "#ee8572",
          pointBackgroundColor: "#ee8572",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#ee8572",
          pointHoverBorderColor: "#ee8572",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          // notice the gap in the data and the spanGaps: false
          //data: [0.8072950291, 0.8072950291, 0.8072950291],
          data: exchange_rate,
          //data: [store.get('exchange_rate')],
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
                yAxes:
                [{
                    id: 'A',
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                        min: min_bar,
                        max: max_bar
                    }
    
     
                  }, {
                    id: 'B',
                    type: 'linear',
                    position: 'right',
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                        min: min_line,
                        max: max_line
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
                  left: 50,
                  right: 50,
                  top: 20,
                  bottom: 20
              }
          }   
    };
    
    
    const barChartData = {
      labels: ['China - Monthly CPI', 'US - Monthly CPI', 'China - Quarterly GDP',
                'US - Aaa Corporate Bonds', 'US - S&P 500'],
      datasets: [
        {
          backgroundColor: ["#ff6f5e", '#ffa41b','#b2ebf2','#35495e','#63b7af'],
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
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
                },],
                yAxes: [{
                  barPercentage: 0.3,
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
                },],
              },
        layout: {
                padding: {
                    left: 20,
                    right: 80,
                    top: 20,
                    bottom: 20
                }
            }  
    };
    
    const rangeChartData = {
        labels: ['past 3 days', 'past 1 week', 'past 1 month', 'past 3 months'],
        datasets: [
        {
        label: 'range',
        backgroundColor: '#35495e',
        stack: '3',
        data: leve_num1,
        },
        {
        backgroundColor: '#63b7af',
        stack: '3',
        data: leve_num2,
        },
        {
          label: 'range2',
          backgroundColor: '#35495e',
          stack: '3',
          data: leve_num3,
          },
        ],
      };
        
      const rangeChartOptions = {
        maintainAspectRatio: true,
        tooltips:{
          enabled:false,
        },
        legend: {
                  display: false,
                },
        scales: {
                  xAxes: [{
                    stacked: true,
                    gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                      min: 0,
                      max: 100,
                      callback: function(value) {
                          return value + "%"
                      }
                    }
                  },],
                  yAxes: [{
                    stacked: true,
                    barPercentage: 0.4,
                    gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                  }
                  
                  },],
                },
                layout: {
                  padding: {
                      left: 20,
                      right: 80,
                      top: 20,
                      bottom: 20
                  }
              }  
        };








        //console.log("height is ", [height2, h1, h2, h3])
    return (
            <Layout>
                <Layout.Section>
                <Layout.Section oneHalf>
                    <Select
                            label="Analytics on"
                            labelInline
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                            />
                     <HorizontalBar 
                            height="150vh"
                            data={barChartData}
                            options={barChartOptions}
                        />
         
                </Layout.Section>
                <Layout.Section oneHalf>

                    
                    <TextStyle variation="strong">Your Most Price Sentitive Products in the Country</TextStyle>
                    
                    <HorizontalBar 
                            height="150vh"
                            data={barChartData}
                            options={barChartOptions}
                        />
            
                    <TextStyle variation="strong">The current price level in USD</TextStyle>
                        <HorizontalBar 
                            height="150vh"
                            data={rangeChartData}
                            options={rangeChartOptions}
                            />
             </Layout.Section>
             </Layout.Section>
      
            <Layout.Section oneHalf>
                <TextStyle variation="strong">Your Most Price Sentitive Products in the Country</TextStyle>
                
                <HorizontalBar 
                        height="150vh"
                        data={barChartData}
                        options={barChartOptions}
                    />
        
                <TextStyle variation="strong">The current price level in USD</TextStyle>
                    <HorizontalBar 
                        height="150vh"
                        data={rangeChartData}
                        options={rangeChartOptions}
                        />
            </Layout.Section>
            <Layout.Section oneHalf>
                <TextStyle variation="strong">Your Most Price Sentitive Products in the Country</TextStyle> 
                <HorizontalBar 
                        height="150vh"
                        data={barChartData}
                        options={barChartOptions}
                    />
        
                <TextStyle variation="strong">The current price level in USD</TextStyle>
                    <HorizontalBar 
                        height="150vh"
                        data={rangeChartData}
                        options={rangeChartOptions}
                        />
                    <TextStyle variation="strong">How price sensitive this market is</TextStyle>
                        <Doughnut
                            height= "50vh"
                            data={doughnutChartData}
                            options={doughnutChartOptions}
                        />
                        <TextStyle variation="strong">Price vs Sales in store currency</TextStyle>
                        <Bar 
                        height="100vh"
                        data={lineChartData}
                        options={lineChartOptions}
                        />
            </Layout.Section>
          </Layout>

    );
  }

