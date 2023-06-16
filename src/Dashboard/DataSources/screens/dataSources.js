'use client'
import "../styles/style.css"
import { TextField, Button } from "@mui/material"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DataSourceCard from "../components/data-source-card/dataSourceCard"
import { useState, useEffect } from 'react'
import MongoDBAccordion from "../components/accordions/mongodb-atlas"
import AWSAccordion from "../components/accordions/aws-accordion"
import CSVAccordion from "../components/accordions/csv-accordion"
import TextInput from "@/components/text-input"
import { colors } from "@/constants/colors"
import OutlineButton from "@/components/outline-button"
import DropDown from "@/components/dropdown/dropDown"
import { useRef } from "react"
import ListView from "@/components/list-view/listView"

export default function DataSources(){
    const [dataSources, setDataSources] = useState([])
    const [filters, setFilters] = useState([])
    const [selectedFilters, addSelectedFilters] = useState([])
    const [isFiltersVisible, showFilters] = useState(false)
    const [accordionShown, setAccordionShown] = useState('csv')
    const [isListVisible, showList] = useState(false)

    const divRef = useRef();

    let  dataSrc = 
    [
        {
            name:'MyAWSMongoDB',
            type: 'AWS',
            subtype: 'MongoDB',
            url:'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
            id:1
        },
        {
            name:'MyAWSRDS',
            type: 'AWS',
            subtype: 'MySQL',
            url:'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
            id:2
        },
        {
            name:'MyMongoDBAtlas',
            type: 'MongoDB',
            subtype: 'Atlas',
            url:'https://www.turing.com/blog/wp-content/uploads/2022/02/Mongo-DB-Features.jpg',
            id:3
        },
        {
            name:'MyAWSRDS',
            type: 'AWS',
            subtype: 'MySQL',
            url:'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
            id:2
        },
        {
            name:'MyMongoDBAtlas',
            type: 'MongoDB',
            subtype: 'Atlas',
            url:'https://www.turing.com/blog/wp-content/uploads/2022/02/Mongo-DB-Features.jpg',
            id:3
        },
        {
            name:'MyMongoDBAtlas',
            type: 'MongoDB',
            subtype: 'Atlas',
            url:'https://www.turing.com/blog/wp-content/uploads/2022/02/Mongo-DB-Features.jpg',
            id:3
        }
    ]

    useEffect(() => {
        setDataSources(dataSrc)
    
      return () => {
        
      }
    }, [])
    
    return(
        <div className="container">
        <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <h1>Data Sources</h1>
            <div>
            <h2 style={{color: '#1B2CC1'}} onClick={()=>{showList(!isListVisible)}}>Create data source</h2>
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
                    showList(false)
                    console.log(item)
                    const rect = divRef?.current?.getBoundingClientRect();
                    window.scrollTo({
                        top: rect.y,
                        behavior: 'smooth', // Use 'auto' for instant scroll
                    });
                    setAccordionShown(item.toLowerCase())
                }}
                list={[
                    {
                        id:1,
                        name:'MongoDB'
                    },
                    {
                        id:2,
                        name:'AWS'
                    },
                    {
                        id:3,
                        name:'CSV'
                    }
                ]}
                ></ListView>
                :
                null
            }
            </div>
        </div>
        

        <div className="search-container">
            <TextInput
            placeholder={'Data Source Name'}
            width= {'60%'}
            style={{
                backgroundColor: colors.white,
                borderRadius: '8pt',
            }}></TextInput>
            <div>
                <DropDown
                    list={[{id:1, name:''},{id:1, name:'AWS'},{id:2, name:'MongoDB'},{id:3, name:'SQL'},{id:4, name:'CSV/Excel'}]}
                    onSelectItem={(item)=>{
                      setDataSources(
                        dataSrc.filter((source)=>{
                            return source.type == item
                        })
                      )              
                    }}>
                </DropDown>
            </div>      
        </div>

        <div className="data-sources-list">
        {
            dataSources.map((dataSource) =>{
                return (
                    <DataSourceCard 
                    key={dataSource.id}
                    name={dataSource.name}
                    type={dataSource.type}
                    url={dataSource.url}
                    setDataSource={(type)=>{
                        setAccordionShown(type.toLowerCase())
                    }}
                    >
                    </DataSourceCard>
                )}                
                )
        }

        </div>

        <div 
        ref={divRef}
        className="data-sources-accordion">
                <MongoDBAccordion
                expanded={accordionShown == 'mongodb'? true : false}
                ></MongoDBAccordion>
                <AWSAccordion
                expanded={accordionShown == 'aws'? true : false}
                ></AWSAccordion>
                <CSVAccordion
                expanded={accordionShown == 'csv'? true : false}
                ></CSVAccordion>
            </div>
        </div>
    )    
}
