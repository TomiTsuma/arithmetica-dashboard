'use client';
import '../../assets/style/card.css'
import { Card } from '@mui/material';
import BarGraph from '../visualizations/bar';
import { useEffect, useState } from 'react';
export default function DataCard(props){
  useEffect(() => {
    console.log(props)
  
    return () => {
      
    }
  }, [])
  

    return(
        <Card variant="elevated" raised={true} elevation={1} style={{margin:'5pt'}}>
          <div className="card-container" style={{width: '170pt'}}>
            <h2>{props.title}</h2>
            {
              props.type == 'bar'?
                <BarGraph
                  color={["#FFFFFF"]}
                  data = {props.data}
                  width = {props.width}
                  height = {props.height}
                  x = {props.x}></BarGraph>
                  :
                null
              
            }
            
          </div>
        </Card>
    )
}