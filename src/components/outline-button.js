'use client'
import {Button} from "@mui/material"
import { useEffect } from "react"
 
export default function OutlineButton({style, onClick, title}){
    useEffect(() => {
      console.log(title)
      console.log(style)
    
      return () => {
        
      }
    }, [])
    
    return(
        <Button style={{
            ...{
            backgroundColor: '#FFFFFF',  
            fontSize: '1rem', 
            fontFamily: 'Catamaran-Bold', 
            textTransform:'none', 
            border:'solid 1pt #025464',
            }, ...{style}}
            
    }>
        <h2 style={{margin:'0pt', color:"#070600", fontSize:'1.0rem'}}>
        {title}
        </h2>
        </Button>
    )
}