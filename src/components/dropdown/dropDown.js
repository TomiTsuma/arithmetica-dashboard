import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ListView from "../list-view/listView";
import { Chip } from "@mui/material";
import { colors } from "@/constants/colors";

export default function DropDown(props){
    const [value, setValue] = useState(props.list[0]?.name)
    const [list, setList] = useState(props.list)
    const [isListVisible, showList] = useState(false)
    const [itemsSelected, setItemsSelected] = useState([])

    useEffect(() => {
      setItemsSelected([])
    
      return () => {
        
      }
    }, [])
    

    return(
        <div style={{width: props.width }}>
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
                    minWidth: '10%',
                    zIndex:3
                }
            }
            onSelectItem={(item)=>{
                setValue(item)
                showList(false)
                let i = itemsSelected
                i.push(item)
                props.onSelectItem(item)
                setItemsSelected(i)
            }}
            list={list}
            ></ListView>
            :
            null
        }
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
        {
            props.showItemsSelected?
            itemsSelected.map((item)=>{
                return (
                    <Chip key={item} label={item} style={{maxWidth:'60pt', marginLeft:'2pt', marginTop:'2pt'}}></Chip>
                    )
            })
            :
            null
        }
        </div>
        </div>
    )
}