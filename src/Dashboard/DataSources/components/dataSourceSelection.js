'use client'
import "../styles/style.css"
import DataSourceCard from "./data-source-card/dataSourceCard"
import { useState, useEffect } from "react"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export function DataSourceSelection(){
    const [dataSources, setDataSources] = useState([])

    useEffect(() => {
      setDataSources(
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
            }
        ]

      )
    
      return () => {
        
      }
    }, [])
    return(
        <div className="backdrop">
            <div className="data-source-selection-container">
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'flex-end'}}>
            <h1 >Data Sources</h1>
            <h2 style={{color: '#abd2fa', fontSize:'1.2rem'}} >Create a data source</h2>
            </div>
            <div className="data-sources-list">
                {
                    dataSources.map((dataSource) =>{
                        return (
                            <DataSourceCard 
                            key={dataSource.id}
                            name={dataSource.name}
                            type={dataSource.type}
                            url={dataSource.url}>
                            </DataSourceCard>
                        )}                
                        )
                }

        </div>
            </div>
        </div>
        
    )
}