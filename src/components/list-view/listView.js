'use client'
import '../../assets/style/listView.css'
import { useState } from 'react'

export default function ListView(props){
    const [selectedItem, setSelectedItem] = useState()
    return(
        <div style={{
            ...props.containerStyle,
            ...{
                backgroundColor: '#fbfffe',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            }
        }
        }>
        {
           props.list.map((item)=>{
            return (
                <div key={item.id} className="item-container" style={
                    {
                        ...props.listItemContainerStyle, 
                        ...{
                            margin:'0pt',
                            marginLeft:'3pt',
                            marginRight:'3pt',
                        }
                    }
                }>
                <p className="list-item" style={
                    {
                        ...props.listItemTextStyle,
                        ...{

                        }
                    }
                    }
                    onClick={()=>{
                        props.onSelectItem(item.name)
                    }}
                    >{item.name}</p>
                </div>
            )
           }) 
        }
        </div>
    )
}