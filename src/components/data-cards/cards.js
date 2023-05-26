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
        <Card variant="elevated" raised={true} elevation={1}>
          <div className="card-container">
            <h2 style={{fontSize:'1rem'}}>{props.title}</h2>
            {
              props.type == 'bar'?
                <BarGraph
                  color={"#FFFFFF"}
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