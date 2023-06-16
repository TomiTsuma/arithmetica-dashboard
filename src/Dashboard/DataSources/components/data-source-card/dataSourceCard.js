'use client'
import { Card, Chip } from '@mui/material'
import "../../styles/style.css"
import { dataSourcesConstants } from '@/constants/dataSourcesConstants'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"

export default function DataSourceCard(props){
    const [isOptionsVisible, showOptions] = useState(false)
    return(
        <Card  variant="elevated" raised={true} elevation={10} onClick={props.onDataSourceSelected} style={{ borderRadius: '8pt'}}>
            <div className="data-source-card-container">
                <div className="data-source-card-title">
                    <h2 style={{alignSelf:'flex-start', fontSize:'0.8rem', marginBottom:'0pt', marginTop: '2pt'}}>{props.name}</h2>
                    <Chip label={props.type} style={{paddingTop:'2pt', paddingBottom:'2pt',fontSize:'0.6rem', alignSelf:'flex-end', backgroundColor:dataSourcesConstants[props.type]['color'], color:'#FFFFFF'}}/>
                </div>

                <div 
                className="data-source-card-viz" 
                style={{backgroundImage:`url(${props.url})`, backgroundSize:'100% 100%'}}
                onMouseEnter={()=>{
                    showOptions(true)
                }}
                onMouseLeave={()=>{
                    showOptions(false)
                }}
                onClick={()=>{
                    props.setDataSource(props.type)
                }}
                >
                {
                    isOptionsVisible?
                    <div style={{width: '100%', display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor: '#07060060', paddingTop: '5pt', paddingBottom:'5pt', marginLeft:'0pt', transition: 'opacity 0.5s ease' }}>
                        <FontAwesomeIcon 
                        icon={faEdit}
                        className='icon'
                        onClick={()=>{

                        }}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon 
                        icon={faTrash}
                        className='icon'
                        onClick={()=>{
                            
                        }}
                        ></FontAwesomeIcon>
                    </div>
                    :
                    null
                }
                    
                </div>
            </div>
        </Card>
    )
    
}