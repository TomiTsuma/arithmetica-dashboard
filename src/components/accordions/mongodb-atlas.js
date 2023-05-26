import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core'
export default function MongoDBAccordion(){
    return(
        <Accordion>
            <AccordionSummary aria-controls="accordion-content" id="accordion-header">
                <h1 style={{margin:'0pt', fontSize:'1.2rem'}}>
                    MongoDB Atlas
                </h1>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                <h2 style={{color:"#000", fontSize:'1rem'}}>To connect to a MongoDB Atlas Instance, follow these steps:</h2>
                    <ol>
                        <li>
                            <p>Log in to your MongoDB Atlas account.</p>
                        </li>
                        <li>
                            <p>From the Atlas dashboard, select your project.</p>
                        </li>
                        <li>
                            <p>In the left-hand navigation pane, click on "Database Access" under the "Security" section.</p>
                        </li>
                        <li>
                            <p>Click the "Add New Database User" button.</p>
                        </li>
                        <li>
                            <p>Enter a username and password for the new user. Make sure to use a strong password.</p>
                        </li>
                        <li>
                            <p>Choose the desired authentication method. You can select either "Password" or "AWS IAM Database Authentication" depending on your requirements. For most cases, the "Password" option is appropriate.</p>
                        </li>
                        <li> 
                            <p>Under the "Database User Privileges" section, you can define the user's privileges. Select the appropriate role or roles based on the user's access requirements. You can choose from existing roles or create a custom role with specific privileges.</p>
                        </li>
                        <li>
                            <p>Click the "Add User" button to create the user.</p>
                        </li>
                    </ol>

            </Typography>
            </AccordionDetails>
        </Accordion>
    )
}