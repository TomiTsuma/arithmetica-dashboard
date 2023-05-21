import "../../assets/styles/globals.css"
import AlternativeNavbar from "../components/nav"
import TimeSeries from "../components/tsa/TimeSeries"
import LineGraph from "../components/visualizations/line";

export default function Forecast(){
    const mrr = [
        {
          name: 'January',
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'February',
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'April',
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          pv: 4300,
          amt: 2100,
        },
      ];
    return(
        <div className="container" style={{backgroundColor:'#02546410'}}>
        <AlternativeNavbar></AlternativeNavbar>
        <div className="forecast-container" style={{width:'90vw', padding:'10pt'}}>
            <h1>Forecasting</h1>
            <div style={{display:'flex', flexDirection:'row', backgroundColor:'#FFF', border:'solid 2pt #C2C2C230', borderRadius:'5pt', padding:'10pt'}}>
            
            <div style={{width:'40%'}}> 
            <h2 style={{color:'#000',   fontSize:'1.2rem'}}>Revenue</h2>
            <div style={{display:'flex', flexDirection:'row', width:'210pt', justifyContent:'space-between', alignItems:'center'}}>
             <h1 style={{margin:'0pt', alignSelf:'center'}}>Ksh.132</h1>
             <p style={{margin:'0pt', alignSelf:'center', fontSize:'1.2rem',color:'#C2C2C2'}}> Next 12 months</p>
             </div>
             <p>"Over the next 12 Months, you will bill approximately Ksh. 132 from 12 Customers with a growth of 12%(3 months average)"</p>
            </div>
            
            <div style={{marginTop:'25pt'}}>
            <LineGraph
                    data={mrr}
                    width={750}
                    height={350}></LineGraph>
                
            </div>
            </div>

            <div style={{display:'flex', flexDirection:'row', backgroundColor:'#FFF', border:'solid 2pt #C2C2C230', borderRadius:'5pt', padding:'10pt'}}>
            
            <div style={{width:'40%'}}> 
            <h2 style={{color:'#000',   fontSize:'1.2rem'}}>Monthly Recurring Revenue</h2>
            <div style={{display:'flex', flexDirection:'row', width:'210pt', justifyContent:'space-between', alignItems:'center'}}>
             <h1 style={{margin:'0pt', alignSelf:'center'}}>Ksh.29,000</h1>
             <p style={{margin:'0pt', alignSelf:'center', fontSize:'1.2rem',color:'#C2C2C2'}}> In one year</p>
             </div>
             <p>"In a year with Ksh.2,000 linear growth and churn your MRR will be Ksh.29,000"</p>
            </div>
            
            <div style={{marginTop:'25pt'}}>
            <LineGraph
                    data={mrr}
                    width={750}
                    height={350}></LineGraph>
                
            </div>
            </div>

            <div style={{display:'flex', flexDirection:'row', backgroundColor:'#FFF', border:'solid 2pt #C2C2C230', borderRadius:'5pt', padding:'10pt'}}>
            
            <div style={{width:'40%'}}> 
            <h2 style={{color:'#000',   fontSize:'1.2rem'}}>Customers</h2>
            <div style={{display:'flex', flexDirection:'row', width:'130pt', justifyContent:'space-between', alignItems:'center'}}>
             <h1 style={{margin:'0pt', alignSelf:'center'}}>305</h1>
             <p style={{margin:'0pt', alignSelf:'center', fontSize:'1.2rem',color:'#C2C2C2'}}> In one year</p>
             </div>
             <p>"In a year with lineargrowth of 15 users and 8% churn you'll have 305 users."</p>
            </div>
            
            <div style={{marginTop:'25pt'}}>
            <LineGraph
                    data={mrr}
                    width={750}
                    height={350}></LineGraph>
                
            </div>
            </div>
        </div>

        
        </div>
    )
}