import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
export default function CSVAccordion(){
    return(
        <Accordion>
            <AccordionSummary aria-controls="accordion-content" id="accordion-header">
                <h1 style={{margin:'0pt', fontSize:'1.5em'}}>
                    CSV & Excel Files
                </h1>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                <h2 style={{color:"#000", fontSize:'1rem'}}>To analyze a csv or excel file</h2>
                    <ol>
                        <li>
                            <p>Provide the name of the file.</p>
                        </li>
                        <li>
                            <p>Upload your CSV file using the button below.</p>
                        </li>
                        
                        <li>
                            <p>Done.</p>
                        </li>
                    </ol>

            </Typography>
            </AccordionDetails>
        </Accordion>
    )
}