import "../../assets/styles/globals.css"
import DataSourceCard from "../components/data-source-card.js";
import AlternativeNavbar from "../components/nav"
import { TextField, Button, Accordion, AccordionActions, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MongoDBAccordion from "../components/accordions/mongodb-atlas";
import AWSAccordion from "../components/accordions/aws-accordion";
export default function DataSources(){
    return(
        <div className="container" style={{backgroundColor:'#02546410'}}>
        <AlternativeNavbar></AlternativeNavbar>
        
        <div className="data-sources-container">
            <h1>Data Sources</h1>
            <div className="search-container">
                <TextField  placeholder={'Data Source Name'} variant="outlined" size="small" style={{width:'200pt',fontFamily: 'Catamaran-Medium'}}></TextField>
                <Button style={{ backgroundColor: '#FFFFFF', fontFamily: 'Catamaran-Bold',boxShadow:'1px 1px 1px 1px #C2C2C2'}}>Filters</Button>
                
            </div>
            <div className="data-sources-list">
                <DataSourceCard></DataSourceCard>
                <DataSourceCard></DataSourceCard>
                <DataSourceCard></DataSourceCard>
                <DataSourceCard></DataSourceCard>
                <DataSourceCard></DataSourceCard>
                <DataSourceCard></DataSourceCard>
                <DataSourceCard></DataSourceCard>
                <FontAwesomeIcon icon={faPlus} color="#C2C2C2" style={{fontSize:"5rem", alignSelf:'center', marginLeft:"80pt"}} className="add-data-source-icon"></FontAwesomeIcon>
            </div>
            <div className="data-sources-accordion">
                <MongoDBAccordion></MongoDBAccordion>
                <AWSAccordion></AWSAccordion>
            </div>
        </div>
        </div>
    )
}