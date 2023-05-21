import {Button} from "@mui/material"

export default function GradientButton(props){
    return(
        <Button style={{background: 'linear-gradient(to right, #025464, #1B2CC1)',  fontSize: '1rem', color: '#fbfffe', fontFamily: 'Catamaran-Bold', textTransform:'none', height:'40pt'}}>
        <h2 style={{margin:'0pt', color:"#fbfffe"}}>
        {props.title}
        </h2>
        </Button>
    )
}