import { TextField } from "@mui/material";

export default function TextInput(props){

    return(

        <TextField  placeholder={props.placeholder} variant={props.variant} size="small" style={
            {
                ...{
                    width:props.width,
                    fontFamily: 'Catamaran-Medium'
                },
                ...props.style,
            }
        }></TextField>
    )
    
}