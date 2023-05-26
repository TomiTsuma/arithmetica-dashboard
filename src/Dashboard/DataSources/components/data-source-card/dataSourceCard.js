import { Card, Chip } from '@mui/material'
import "../../styles/style.css"
import { dataSourcesConstants } from '@/constants/dataSourcesConstants'

export default function DataSourceCard(props){
    return(
        <Card  variant="elevated" raised={true} elevation={5}>
            <div className="data-source-card-container">
                <div className="data-source-card-title">
                    <h2 style={{alignSelf:'flex-start', fontSize:15}}>{props.name}</h2>
                    <Chip label={props.type} style={{paddingTop:'3pt', paddingBottom:'3pt',fontSize:'0.8rem', alignSelf:'flex-end', backgroundColor:dataSourcesConstants[props.type]['color'], color:'#FFFFFF'}}/>
                </div>

                <div className="data-source-card-viz" style={{backgroundImage:`url(${props.url})`, backgroundSize:'100% 100%'}}>
                </div>
            </div>
        </Card>
    )
    
}