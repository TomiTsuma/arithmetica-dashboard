import GradientButton from '@/components/button'
import { colors } from '@/constants/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
export default function MongoDBAccordion(){
    return(
        <Accordion>
            <AccordionSummary aria-controls="accordion-content" id="accordion-header">
                <h1 style={{margin:'0pt', fontSize:'1.5em'}}>
                    MongoDB Atlas
                </h1>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                <h2 style={{color:"#000", fontSize:'1rem'}}>To connect to a MongoDB Atlas Instance, follow these steps:</h2>
                    <ol>
                        <li>
                            <p style={{color: colors.black}}>Log in to your MongoDB Atlas account.</p>
                        </li>
                        <li>
                            <p style={{color: colors.black}}>From the Atlas dashboard, select your project.</p>
                        </li>
                        <li>
                            <p style={{color: colors.black}}>In the left-hand navigation pane, click on &quot;Database Access&quot; under the &quot;Security&quot; section.</p>
                        </li>
                        <li>
                            <p style={{color: colors.black}}>Click the &quot;Add New Database User&quot; button.</p>
                        </li>
                        <li>
                            <p style={{color: colors.black}}>Enter a username and password for the new user. Make sure to use a strong password.</p>
                        </li>
                        <li>
                            <p style={{color: colors.black}}>Choose the desired authentication method. You can select either &quot;Password&quot; or &quot;AWS IAM Database Authentication&quot; depending on your requirements. For most cases, the &quot;Password&quot; option is appropriate.</p>
                        </li>
                        <li> 
                            <p style={{color: colors.black}}>Under the &quot;Database User Privileges&quot; section, you can define the user's privileges. Select the appropriate role or roles based on the user's access requirements. You can choose from existing roles or create a custom role with specific privileges.</p>
                        </li>
                        <li>
                            <p style={{color: colors.black}}>Click the &quot;Add User&quot; button to create the user.</p>
                        </li>
                    </ol>
                <div>
                    <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem'}}>Data Source Name:</p>
                    <div style={{width:'30%', height:'35pt', background:'#FFF', border:'solid 2pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
                        <p style={{textAlign:'left', left:0, color:'#C2C2C2', fontSize:'1rem'}}>Data Source Name</p>
                    </div>
                    <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem'}}>MongoDB Connection URL:</p>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem'}}>mongodb+srv://</p>
                        <div style={{width:'100pt', height:'30pt', background:'#FFF', border:'solid 2pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
                            <p style={{textAlign:'left', left:0, color:'#C2C2C2', fontSize:'1rem'}}>Username</p>
                        </div>
                        <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem', marginLeft:'3pt',marginRight:'3pt', fontSize:'2.0rem', marginTop:'0pt'}}>:</p>
                        <div style={{width:'100pt', height:'30pt', background:'#FFF', border:'solid 2pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
                            <p style={{textAlign:'left', left:0, color:'#C2C2C2', fontSize:'1rem'}}>Password</p>
                        </div>
                        <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem', marginLeft:'3pt',marginRight:'3pt', fontSize:'1.2rem', marginTop:'10pt'}}>@</p>
                        <div style={{width:'100pt', height:'30pt', background:'#FFF', border:'solid 2pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
                            <p style={{textAlign:'left', left:0, color:'#C2C2C2', fontSize:'1rem'}}>Cluster</p>
                        </div>
                        <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem'}}>.mongodb.net</p>
                    </div>

                    <GradientButton title={'Connect'}></GradientButton>
                </div>

            </Typography>
            </AccordionDetails>
        </Accordion>
    )
}