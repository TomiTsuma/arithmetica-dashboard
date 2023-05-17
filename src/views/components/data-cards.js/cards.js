'use client';
import '../../../assets/styles/card.css'
import { Card } from '@material-ui/core'
import BarGraph from '../visualizations/bar';
export default function DataCard(){
    return(
        <Card variant="outlined" raised={true} elevation={1}>
        <div className="card-container">
        <h2>Monthly Active Users</h2>
        <BarGraph></BarGraph>
        </div>
        </Card>
        

    )
}