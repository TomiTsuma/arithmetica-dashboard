'use client'

import { useEffect } from 'react';
import '../../assets/style/visualizations.css'
import { commafyNumber } from '@/helpers/commafy';
export default function CustomTooltip({ active, payload, label }){
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip"
        style={
            {
                backgroundColor: '#1B2CC195',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '5pt',
                borderRadius: '8pt'
            }
        }>
          <h2 style={{margin:0, color: "#fbfffe", fontSize:'1.2rem'}}>{`${label}`}</h2>
          {
            payload.map((keyName)=>{
                return (
                    <h3 key={keyName} style={{margin:'1pt', fontSize:'1rem'}}>{`${keyName.name}:  ${commafyNumber(keyName?.value)}`} </h3>
                )
            })
          }
          
        </div>
      );
    }
  
    return null;
  };