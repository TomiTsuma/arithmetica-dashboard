import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ListView from "../list-view/listView";

export default function DropDown(props){
    const [value, setValue] = useState(props.list[0]?.name)
    const [list, setList] = useState(props.list)
    const [isListVisible, showList] = useState(false)

    return(
        <div style={{width: props.width}}>
        <div 
        onClick={()=>{showList(!isListVisible)}}
        style={{width: '100%', height:'25pt', background:'#FFF', border:'solid 1pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
            <p style={{textAlign:'left', left:0, color:'#C2C2C2', fontSize:'1rem'}}>{value}</p>
            <FontAwesomeIcon icon={faSortDown} style={{color:'#000'}}></FontAwesomeIcon>
        </div>
        {
            isListVisible?
            <ListView
            containerStyle={
                {
                    position: 'absolute',
                    width: '10%'
                }
            }
            onSelectItem={(item)=>{
                setValue(item)
                showList(false)
            }}
            list={list}
            ></ListView>
            :
            null
        }
        </div>
    )
}