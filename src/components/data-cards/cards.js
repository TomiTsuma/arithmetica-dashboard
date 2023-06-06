'use client';
import '../../assets/style/card.css'
import { Card } from '@mui/material';
import BarGraph from '../visualizations/bar';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LineGraph from '../visualizations/line';
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
              props.data.length > 0?
              <FontAwesomeIcon icon={faPlus} style={{alignSelf:'flex-start', marginBottom: '10pt', marginLeft: '10pt', fontSize: '24pt', color: '#fbfffe'}} onClick={props.selectDataSource}></FontAwesomeIcon>
              :
              props.type == 'bar'?
                <BarGraph
                  color={["#FFFFFF"]}
                  data = {props.data}
                  width = {props.width}
                  height = {props.height}
                  x = {props.x}></BarGraph>
                  :
              props.type == 'line'?
                  <LineGraph
                    color={["#FFFFFF"]}
                    data = {props.data}
                    width = {props.width}
                    height = {props.height}
                    keys = {props.x}></LineGraph>
                    :
                null
              
            }
            
          </div>
        </Card>
    )
}