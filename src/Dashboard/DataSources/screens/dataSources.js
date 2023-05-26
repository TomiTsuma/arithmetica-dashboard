import "../styles/style.css"
import { TextField, Button } from "@mui/material"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DataSourceCard from "../components/data-source-card/dataSourceCard"
import { useState, useEffect } from 'react'
import MongoDBAccordion from "../components/accordions/mongodb-atlas"
import AWSAccordion from "../components/accordions/aws-accordion"
import CSVAccordion from "../components/accordions/csv-accordion"

export default function DataSources(){
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
        <div className="container">
        <h1>Data Sources</h1>

        <div className="search-container">
            <TextField  placeholder={'Data Source Name'} variant="outlined" size="small" style={{width:'200pt',fontFamily: 'Catamaran-Medium'}}></TextField>
            <Button style={{ backgroundColor: '#FFFFFF', fontFamily: 'Catamaran-Bold',boxShadow:'1px 1px 1px 1px #C2C2C2'}}>Filters</Button>       
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

            <FontAwesomeIcon icon={faPlus} color="#C2C2C2" style={{fontSize:"5rem", alignSelf:'center', marginLeft:"80pt"}} className="add-data-source-icon"></FontAwesomeIcon>
        </div>

        <div className="data-sources-accordion">
                <MongoDBAccordion></MongoDBAccordion>
                <AWSAccordion></AWSAccordion>
                <CSVAccordion></CSVAccordion>
            </div>
        </div>
    )    
}
