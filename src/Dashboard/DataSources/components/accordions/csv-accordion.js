import GradientButton from '@/components/button'
import OutlineButton from '@/components/outline-button'
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
                            <OutlineButton title={'Select File'} style={{height: '20pt', width:'100pt'}}></OutlineButton>
                        </li>
                        
                        <li>
                            <p>Done.</p>
                        </li>
                        <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem'}}>Data Source Name:</p>
                        <div style={{width:'30%', height:'35pt', background:'#FFF', border:'solid 2pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
                        <p style={{textAlign:'left', left:0, color:'#C2C2C2', fontSize:'1rem'}}>Data Source Name</p>
                    </div>
                    </ol>
                    <GradientButton title={'Connect'} style={{height: '20pt', width:'120pt'}}></GradientButton>

            </Typography>
            </AccordionDetails>
        </Accordion>
    )
}