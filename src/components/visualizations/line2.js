'use client';

import { LineChart, Line, CartesianGrid, XAxis, YAxis , Tooltip,AreaChart, ResponsiveContainer, Area } from 'recharts';
import "../../../assets/styles/visualizations.css"
//chart component
export default function LineGraphNoBkg (props){
   

  return (
    <ResponsiveContainer width={props.width} height={props.height} className={'responsiveContainerLineGraph'}>
    <AreaChart
          data={props.data}        
        >
          <CartesianGrid></CartesianGrid>
          <Area type="linear" dataKey="amount" stroke="#8884d8" fill="#8884d8" strokeWidth={3}/>
          <Tooltip labelStyle={{fontFamily: 'Catamaran-Medium'}}></Tooltip>
        </AreaChart>
    
  </ResponsiveContainer>
  );
};