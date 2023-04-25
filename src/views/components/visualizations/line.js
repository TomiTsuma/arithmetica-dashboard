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
          <Area type="natural" dataKey="amount" stroke="#8884d8" fill="#8884d8" strokeWidth={3}/>
          <Area type="natural" dataKey="prediction" stroke="#FFA500" fill="#FFA500" strokeWidth={3}/>
          <XAxis dataKey={'created_at'} fontFamily='Catamaran-Medium' color='#FFF' style={{color:"FFF"}}></XAxis>
          <YAxis dataKey={'amount'} fontFamily='Catamaran-Medium'  color='#FFF' style={{color:"FFF"}}></YAxis>
          <Tooltip labelStyle={{fontFamily: 'Catamaran-Medium'}}></Tooltip>
          <div style={{backgroundColor:"#FFA500", width:20, height:20}}></div>
        </AreaChart>
    
  </ResponsiveContainer>
  </div>
  );
};