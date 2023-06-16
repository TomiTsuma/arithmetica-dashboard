import { useEffect, useState } from "react";
import "../../styles/style.css"
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDown from "@/components/dropdown/dropDown";

export default function CustomerSegments(){
    const [filters, setFilters] = useState([])
//Filters should be shown as chips in the add filters div
    const [customers, setCustomers] = useState([])
    const [segments, setSegments] = useState([
        {id:0, name:'Add a filter'},
        {id:1, name:'High LTV'},
        {id:2, name:'Low LTV'},
        {id:3, name:'Churned'},
        {id:4, name:'Repeat customers'},
        {id:5, name:'Most recent'},
        {id:6, name:'Almost churned'},
        {id:7, name:'High ARPU'},
        {id:8, name:'Low ARPU'},
    ])

    useEffect(() => {
      setCustomers(
        [
            {
                id:1,
                name:"Thomas Tsuma",
                joined_date:"12/06/2020",
                latest_transaction_date:"07/07/2023",
                mrr:"2000",
                ltv:"200,000"
            },
            {
                id:2,
                name:"Thomas Tsuma",
                joined_date:"12/06/2020",
                latest_transaction_date:"07/07/2023",
                mrr:"2000",
                ltv:"200,000"
            },
            {
                id:3,
                name:"Thomas Tsuma",
                joined_date:"12/06/2020",
                latest_transaction_date:"07/07/2023",
                mrr:"2000",
                ltv:"200,000"
            },
            {
                id:4,
                name:"Thomas Tsuma",
                joined_date:"12/06/2020",
                latest_transaction_date:"07/07/2023",
                mrr:"2000",
                ltv:"200,000"
            },

        ]
      )
    
      return () => {
        
      }
    }, [])
    
    return(
        <div className="customer-segmentation-container">
        
            <div style={{ display: 'flex', flexDirection:'column', width:'30%', padding:'10pt'}}>
                <div>
                    <DropDown
                        showItemsSelected={true}
                        list={segments}
                        onSelectItem={(item)=>{
            
                        }}>
                    </DropDown>

                    <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem'}}>
                    Add filters to segment your customers by dozens{'\n'}
                    of different data points. Save filters as segments 
                    to access them in Metrics.
                    </p>
                </div>

                <div className="customer-location-transaction-container">
                    <h1 style={{fontSize:'1.5rem', paddingLeft:'10pt', paddingRight:'10pt', fontFamily:'Catamaran-Bold'}}>Segmentation is powered by customer, location and transaction data.</h1>
                    <div className="section">
                        <h2>Customer Data</h2>
                    </div>
                    <div className="section">
                        <h2>Transaction Data</h2>
                    </div>
                    <div className="section">
                        <h2>Location Data</h2>
                    </div>
                </div>

            </div>

            <div style={{ display: 'flex', flexDirection:'column', width:'70%',padding:'10pt', alignItems:'flex-end'}}>
                <div className="customer-segment-list-container" style={{width:'90%', backgroundColor:'#FFF', border:'solid 2pt #C2C2C220', borderRadius:'8pt', padding:'10pt'}}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <h2 style={{color:'#000', fontSize:'1.2rem', marginTop:'0pt', marginRight:'5pt'}}>All Customers (12)</h2>
                        <FontAwesomeIcon icon={faSortDown} style={{color:'#000'}}></FontAwesomeIcon>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', width:'100%', padding:'5pt', justifyContent:'space-around'}}>
                        <div className="customer-column">
                            <h2 className="column-title">Customer</h2>
                            {
                                customers.map((customer)=>{
                                    return <p className="column-value" key={customer.id}>{customer.name}</p>
                                })
                            }
                        </div>

                        <div className="customer-column">
                            <h2 className="column-title">Date Joined</h2>
                            {
                                customers.map((customer)=>{
                                    return <p className="column-value" key={customer.id}>{customer.joined_date}</p>
                                })
                            }
                        </div>

                        <div className="customer-column">
                            <h2 className="column-title">Latest Transaction Date</h2>
                            {
                                customers.map((customer)=>{
                                    return <p className="column-value" key={customer.id}>{customer.latest_transaction_date}</p>
                                })
                            }
                        </div>

                        <div className="customer-column">
                            <h2 className="column-title">MRR</h2>
                            {
                                customers.map((customer)=>{
                                    return <p className="column-value" key={customer.id}>KSh. {customer.mrr}</p>
                                })
                            }
                        </div>

                        <div className="customer-column">
                            <h2 className="column-title">LTV</h2>
                            {
                                customers.map((customer)=>{
                                    return <p className="column-value" key={customer.id}>KSh. {customer.ltv}</p>
                                })
                            }
                        </div>
                    </div>
                
                </div>
            </div>

        </div>
    )
}