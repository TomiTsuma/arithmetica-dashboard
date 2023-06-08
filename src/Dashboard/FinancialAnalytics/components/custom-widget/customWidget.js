'use client'
import { colors } from '@/constants/colors'
import '../../styles/style.css'
import { useState, useEffect } from 'react'
import { Chip } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import LineGraph from '@/components/visualizations/line'

export default function CustomWidget(props){
    const [title, setTitle] = useState()
    const [data, setData] = useState()
    const [chip, setChip] = useState({
        textColor: colors.textFaded,
        color:colors.textFaded,
        icon: faArrowDown
    })

    useEffect(()=>{
        setTitle(props.name)
        setData(props.data)
        console.log(((props.data[props.data.length -1]['uv']) - (props.data[props.data.length -2]['uv'])) > 0)
        if(((props.data[props.data.length -1]['uv']) - (props.data[props.data.length -2]['uv'])) > 0)
        {
            setChip({
                textColor: colors.green,
                color:colors.green + 40,
                icon: faArrowUp
            })
        }
        else if(((props.data[props.data.length -1]['uv'])- (props.data[props.data.length -2]['uv'])) < 0)
        {
            setChip({
                textColor: colors.red,
                color:colors.red + 90,
                icon: faArrowDown
            })
        }
        else{
            setChip({
                textColor: colors.textFaded,
                color:colors.textFaded + 40,
                icon: faAdjust
            })
        }

    })

    return (
        <div className='custom-metric-container'>
            <h2 style={{color: colors.text, fontSize: '0.8rem', margin:'0pt'}}>{title}</h2>
            <div style={{display:'flex', flexDirection:'row', width:'100%', alignItems:'flex-end', justifyContent:'space-between'}}>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <h1 style={{color: colors.secondary, fontSize:'1.2rem'}}>KES {props.data[props.data.length -1]['uv']}</h1>
                <p style={{fontSize:'0.6rem', marginLeft:'5pt'}}>from {props.data[props.data.length -2]['uv']}</p>
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <div style={{backgroundColor:chip.color, padding:'5pt', borderRadius:'20pt', width:'5pt', height:'5pt', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <FontAwesomeIcon icon={chip.icon} color={colors.textFaded} style={{fontSize:'100%'}}></FontAwesomeIcon></div>
                <p style={{color: chip.textColor}}>12%</p>
                </div>

            </div>

            <LineGraph
                keys = {['uv']}
                data = {data}
                type={'natural'}
                width = {'100%'}
                xaxis = {'name'}
                yaxis = {'uv'}
                no_axes={true}
                no_grid={true}
                height = {200}>
            </LineGraph>
            
        </div>
    )
}