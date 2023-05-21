import {Button} from "@mui/material"
 
export default function OutlineButton(props){
    return(
        <Button style={{
            backgroundColor: '#FFFFFF',  
            fontSize: '1rem', 
            fontFamily: 'Catamaran-Bold', 
            textTransform:'none', 
            height:'40pt',
            border:'solid 1pt #025464'

        }}>
        <h2 style={{margin:'0pt', color:"#070600"}}>
        {props.title}
        </h2>
        </Button>
    )
}