'use client'
import {Button} from "@mui/material"
import { useEffect } from "react"
 
export default function OutlineButton(props){

    
    return(
        <Button 
        onClick={props.onClick}
        style={{
            ...props.style,
            ...{
            backgroundColor: '#FFFFFF',  
            fontSize: '1rem', 
            fontFamily: 'Catamaran-Bold', 
            textTransform:'none', 
            border:'solid 1pt #025464',
            }}
            
    }>
        <h2 style={{margin:'0pt', color:"#070600", fontSize:'1.0rem'}}>
        {props.title}
        </h2>
        </Button>
    )
}