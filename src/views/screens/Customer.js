import "../../assets/styles/globals.css"
import AlternativeNavbar from "../components/nav"
import { TextField, Menu, MenuItem } from "@material-ui/core"
import { ArrowDropDown } from "@material-ui/icons"
export default function Customer(){
    return(
        <div className='container' style={{backgroundColor:'#02546405'}}>
        <AlternativeNavbar></AlternativeNavbar>
        <div className="customer-analytics-container">
        <div className="search-container" style={{justifyContent:'space-between', display:'flex', flexDirection:'row', width:'90vw', alignItems:'center'}}>
        <h1>Customer Analytics</h1>
        <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{padding:'0pt', marginRight:'20pt', borderBottom:'solid 0pt #AEE2FF'}}>
        <h2 style={{color:' #000',  fontSize:'1.2rem', margin:'0pt'}}>Customer Metrics</h2>
        </div>
        <div style={{padding:'0pt', marginRight:'20pt', borderBottom:'solid 3pt #AEE2FF'}}>
        <h2 style={{color:' #000',  fontSize:'1.2rem', margin:'0pt'}}>Customer Segments</h2>
        </div>
        <TextField  placeholder={'Search Customer'} variant="outlined" size="small" style={{width:'200pt',fontFamily: 'Catamaran-Medium'}}></TextField>
        </div>
        </div>

        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'90vw'}}>
        <div className="customer-segment-filter-container">
            <div style={{width:'200pt', height:'30pt', background:'#FFF', border:'solid 2pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt'}}>
                <p style={{textAlign:'left', left:0, color:'#C2C2C2', fontSize:'1rem'}}>Add a filter</p>
                <ArrowDropDown></ArrowDropDown>
            </div>
            <div style={{width:'200pt'}}>
            <p style={{textAlign:'left', left:0, color:'#C2C2C2', fontSize:'1rem'}}>
            Add filters to segment your customers by dozens{'\n'}
            of different data points. Save filters as segments 
            to access them in Metrics.
            </p>
            </div>
            <Menu
            open={false}
            PaperProps={{
                style: {
                  maxHeight: 200 * 4.5,
                  width: '20ch',
                },
              }}>
              <MenuItem><h1>C1</h1></MenuItem>
            
            </Menu>

        </div>
        <div className="customer-segment-list-container" style={{width:'50vw', backgroundColor:'#FFF', border:'solid 2pt #C2C2C220', borderRadius:'8pt', padding:'10pt'}}>
            <div style={{display:'flex', flexDirection:'row'}}>
                <h2 style={{color:'#000', fontSize:'1.2rem', marginTop:'0pt'}}>All Customers(12)</h2>
                <ArrowDropDown></ArrowDropDown>
            </div>
            <div>
            
            </div>
        
        </div>
        </div>

        </div>
        </div>
    )
}