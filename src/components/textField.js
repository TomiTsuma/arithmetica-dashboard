import { TextField } from "@mui/material"
export default function TextInput(props){
    return(
        <TextField  placeholder={props.hint} variant="outlined" size="small" style={{width:'200pt',fontFamily: 'Catamaran-Medium', backgroundColor:'#fbfffe'}}></TextField>

    )
} 