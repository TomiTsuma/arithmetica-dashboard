'use client';

import { LineChart, Line, CartesianGrid, XAxis, YAxis , Tooltip,AreaChart, ResponsiveContainer, Area } from 'recharts';
import "../../../assets/styles/visualizations.css"
//chart component
export default function LineGraph (props){
    const data = [{'created_at': '2021-03-21', 'amount': 1000.0},
    {'created_at': '2021-10-17', 'amount': 7100.0},
    {'created_at': '2021-10-24', 'amount': 10000.0},
    {'created_at': '2021-11-14', 'amount': 5005.0},
    {'created_at': '2022-02-20', 'amount': 7203.63},
    {'created_at': '2022-02-27', 'amount': 6084.05},
    {'created_at': '2022-03-06', 'amount': 7266.66},
    {'created_at': '2022-03-13', 'amount': 12210.52},
    {'created_at': '2022-03-20', 'amount': 6730.76},
    {'created_at': '2022-03-27', 'amount': 4546.66},
    {'created_at': '2022-04-03', 'amount': 5199.94},
    {'created_at': '2022-04-10', 'amount': 5033.28},
    {'created_at': '2023-04-17', 'amount': 5012.92},
    {'created_at': '2023-04-24', 'amount': 5011.53},
    {'created_at': '2023-05-01', 'prediction': 5134.34},
    {'created_at': '2023-05-08', 'prediction': 4898.40},
    {'created_at': '2023-05-15', 'prediction': 6550.11},
    {'created_at': '2024-05-22', 'prediction': 6264.95},
    {'created_at': '2024-05-29', 'prediction': 6514.16},
    {'created_at': '2024-06-05', 'prediction': 7676.35},
    {'created_at': '2024-06-12', 'prediction': 6397.34},
    {'created_at': '2024-06-19', 'prediction': 5909.11},
    {'created_at': '2024-06-26', 'prediction': 7030.78},
    {'created_at': '2024-07-03', 'prediction': 7388.14}
]

  return (
    <div className='line-graph-container'>
    <ResponsiveContainer width={500} height={300}>
    <AreaChart
          width={500}
          height={400}
          data={data}
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