import GradientButton from '@/components/button'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Paper } from '@mui/material'

const inst = '{\n"Version": "2012-10-17",\n"Statement": [\n{\n"Action": [\n "rds:Describe*",\n"rds:List*",\n"pi:DescribeDimensionKeys",\n"pi:GetResourceMetrics",\n"cloudwatch:Get*",\n"cloudwatch:List*",\n"cloudwatch:Describe*",\n"ce:Get*",\n"ce:List*",\n"ce:Describe*",\n"budgets:Describe*",\n"iam:SimulatePrincipalPolicy"\n],\n"Resource": [\n    "*"\n],\n"Effect": "Allow"\n},\n{\n"Action": [\n    "rds-db:connect"\n],\n"Resource": [\n    "arn:aws:rds-db:*:*:dbuser:*/core&outline*"\n],\n"Effect": "Allow"\n}\n]\n}'
export default function AWSAccordion(props){
    return(
        <Accordion expanded={props.expanded}>
            <AccordionSummary aria-controls="accordion-content" id="accordion-header">
                <h1 style={{marginTop:'5pt', marginBottom:'5pt',fontSize:'1.5rem'}}>
                    AWS IAM Console
                </h1>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                <ol>
                <li>
                <h2 style={{color:"#000", fontSize:'1rem'}}>Create an IAM Role from your AWS IAM Console. Specify another Account ID as the trusted entity and enter in the Core&Outline Account ID below. Select ‘Require External ID’ and enter in the External ID below.</h2>
                
                <div style={{display: 'flex', flexDirection:'row', width:"40%", justifyContent:'space-between', alignItems:'center'}}>
                    <p style={{color:"#C2C2C2", fontSize:'1rem'}}>Core&Outline ID:</p>
                    <div style={{backgroundColor:'#025464', width:'200pt', height:'30pt', borderRadius:'5pt', display:"flex", justifyContent:'center', alignItems:'center'}}>
                        <p style={{color:'white', fontFamily:'monospace',  fontSize:'1rem'}}>62345445611921</p>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection:'row', width:"60%", justifyContent:'space-between', alignItems:'center'}}>
                <p style={{color:"#C2C2C2", fontSize:'1rem'}}>External ID:</p>
                    <div style={{backgroundColor:'#025464', width:'400pt', height:'30pt', borderRadius:'5pt', display:"flex", justifyContent:'center', alignItems:'center'}}>
                        <p style={{color:'white', fontFamily:'monospace', fontSize:'1rem'}}>ea492eeb-4cb2-4caa-a8c8-6449b0b39dc9</p>
                    </div>
                </div>
                </li>
                <li>
                <h2 style={{color:"#000", fontSize:'1rem'}}>Add a new policy to the role with the following permissions. Name and save your policy.</h2>
                <Paper elevation={2} style={{backgroundColor:"#025464", width:'250pt', height:'300pt', marginLeft:'10pt'}}>
                <Typography>
                    <h2 style={{fontSize:15, fontFamily:'monospace'}}>{inst}</h2>
                    </Typography>
                </Paper>
                </li>
                <li>
                <h2 style={{color:"#000", fontSize:'1rem'}}>Name and create your Role in the AWS Console.</h2>
                </li>
                <li>
                <h2 style={{color:"#000", fontSize:'1rem'}}>Enter in your AWS Account ID and IAM Role Name and then press connect.</h2>
                </li>
                </ol>
                <GradientButton title={'Connect'} style={{ width:'80pt', height:'30pt' }}></GradientButton>
            </Typography>
            </AccordionDetails>
        </Accordion>
    )
}