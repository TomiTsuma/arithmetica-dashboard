'use client';

import { LineChart, Line, CartesianGrid, XAxis, YAxis , Tooltip,AreaChart, ResponsiveContainer, Area } from 'recharts';
import { useState, useEffect } from 'react'
//chart component
export default function LineGraph (props){
  const [ gradients, setGradients] = useState([
    {
      gradient: "url(#color1)"
    },
    {
      gradient: "url(#color2)"
    }
  ])
  const [keys, setKeys] = useState([])

  useEffect(() => {
    console.log(props)
    var areas = gradients
    setGradients(areas.map((obj, key)=>{
      return { ...obj, ...{keyName: props.keys[key]}} 
    }))
    console.log(gradients)
  
    return () => {
      
    }
  }, [])
  
   

  return (
    <div className='line-graph-container'>
    <ResponsiveContainer width={props.width} height={props.height}>
    <AreaChart
          data={props.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}          
        >
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={props.xaxis} fontFamily='Catamaran-Medium' color='#FFF' style={{color:"FFF"}} fontSize={10}></XAxis>
          <YAxis dataKey={props.yaxis} fontFamily='Catamaran-Medium'  color='#FFF' style={{color:"FFF"}} fontSize={10}></YAxis>
          <Tooltip labelStyle={{fontFamily: 'Catamaran-Medium'}}></Tooltip>
          <defs>
            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          {
            gradients.map((grad) =>{
              return <Area key={grad.keyName} type="natural" dataKey={grad.keyName} stroke="#8884d8" fillOpacity={1} fill={grad.gradient}/>
            })
          }
        </AreaChart>
    
  </ResponsiveContainer>
  </div>
  );
};