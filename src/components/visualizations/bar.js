import { BarChart, ResponsiveContainer, Bar, Tooltip, CartesianGrid, Legend } from "recharts";
import { useEffect, useState } from "react";


export default function BarGraph(props){
    const [barProps, setBarProps] = useState([])
    useEffect(() => {
        
        setBarProps(props.x.map((element, index)=>{
            return { x:element, color:props.color[index]}
        }))
    
        console.log(barProps)
      return () => {
        
      }
    }, [])
    
    return(
        <ResponsiveContainer width={props.width} height={props.height} >
            <BarChart data={props.data}>
            {
                barProps.map((bar)=>{
                    return <Bar key={bar.x} dataKey={bar.x} fill={bar.color} />
                })
            }
                
                {
                    props.showCartesianGrid == true?
                    <CartesianGrid strokeDasharray="3 3" />
                    :
                    null
                }
            </BarChart>
        </ResponsiveContainer>
    )
}