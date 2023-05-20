import { Card, Chip, Avatar } from "@material-ui/core";
import "../../../assets/styles/card.css"
import aws from "../../../assets/img/aws.png"


export default function DataSourceCard(props){
    return(
        <Card  variant="elevated" raised={true} elevation={1}>
            <div className="data-source-card-container" style={{width:'100%', height:'200pt'}}>
                <div className="data-source-card-title">
                <h2 style={{alignSelf:'flex-start', fontSize:15}}>MyAWSBucket</h2>
                <Chip label="AWS" variant="outlined" color="#FF9900" style={{width:'35pt', height:'15pt', fontSize:'0.5rem', alignSelf:'flex-end', backgroundColor:'#FF9900', color:'#FFFFFF'}}/>
                </div>
                <div className="data-source-card-viz"></div>
            </div>
        </Card>
    )
    
}