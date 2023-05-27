import TextInput from "@/components/textField"
import "../styles/style.css"
import { useEffect, useState } from "react"
import CustomerSegments from "../components/CustomerSegments/customerSegments"
import CustomerMetrics from "../components/CustomerMetrics/customerMetrics"

export default function CustomerAnalytics(){
    const [tabShown, setTabShown] = useState('customer_segmentation')

    return(
        <div className="container">
            <div className="search-container" style={{justifyContent:'space-between', display:'flex', flexDirection:'row', width:'100%', alignItems:'center'}}>
                <h1>Customer Analytics</h1>

                <div style={{display:'flex', flexDirection:'row'}}>
                    <div style={{padding:'0pt', marginRight:'20pt', borderBottom:'solid 0pt #AEE2FF'}}>
                        <h2 style={{color:' #000',  fontSize:'1.2rem', margin:'0pt'}}>Customer Metrics</h2>
                    </div>

                    <div style={{padding:'0pt', marginRight:'20pt', borderBottom:'solid 3pt #AEE2FF'}}>
                        <h2 style={{color:' #000',  fontSize:'1.2rem', margin:'0pt'}}>Customer Segments</h2>
                    </div>

                    <TextInput
                    hint={'Search Customer'}></TextInput>

                </div>

            </div>

            {
                tabShown == 'customer_segmentation'?
                <CustomerSegments></CustomerSegments>
                :
                tabShown == 'customer_metrics'?
                <CustomerMetrics></CustomerMetrics>
                :
                null
            }

        </div>
    )
}