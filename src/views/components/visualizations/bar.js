import { BarChart, ResponsiveContainer, Bar, Tooltip } from "recharts";


export default function BarGraph(props){
    return(
        <ResponsiveContainer width={props.width} height={props.height} >
            <BarChart width={150} height={50} data={props.data}>
            <Bar dataKey="uv" fill={props.color} />
            </BarChart>
        </ResponsiveContainer>
    )
}