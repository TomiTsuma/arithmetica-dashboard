'use client';

import { LineChart, Line, CartesianGrid, XAxis, YAxis , Tooltip,AreaChart, ResponsiveContainer, Area } from 'recharts';
import "../../../assets/styles/visualizations.css"
//chart component
export default function LineGraph (props){
   

  return (
    <div className='line-graph-container'>
    <ResponsiveContainer width={props.width} height={props.height}>
    <AreaChart
          width={500}
          height={400}
          data={props.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}          
        >
          <Area type="natural" dataKey="uv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
          <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <Area type="natural" dataKey="pv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
          // <XAxis dataKey={'name'} fontFamily='Catamaran-Medium' color='#FFF' style={{color:"FFF"}} fontSize={10}></XAxis>
          // <YAxis dataKey={'pv'} fontFamily='Catamaran-Medium'  color='#FFF' style={{color:"FFF"}} fontSize={10}></YAxis>
          <Tooltip labelStyle={{fontFamily: 'Catamaran-Medium'}}></Tooltip>
          <div style={{backgroundColor:"#FFA500", width:20, height:20}}></div>
        </AreaChart>
    
  </ResponsiveContainer>
  </div>
  );
};