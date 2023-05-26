import { BarChart, ResponsiveContainer, Bar, Tooltip } from "recharts";
import { useEffect } from "react";


export default function BarGraph(props){
    useEffect(() => {
      console.log(props)
    
      return () => {
        
      }
    }, [])
    
    return(
        <ResponsiveContainer width={props.width} height={props.height}>
            <BarChart data={props.data}>
                <Bar dataKey={props.x} fill={props.color} />
            </BarChart>
        </ResponsiveContainer>
    )
}