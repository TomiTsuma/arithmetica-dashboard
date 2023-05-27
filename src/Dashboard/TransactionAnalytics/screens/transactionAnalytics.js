'use client'
import "../styles/style.css"
import { useEffect, useState } from "react"
import { faSortDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BarGraph from "@/components/visualizations/bar";
export default function TransactionAnalytics(){
    const [transactionValueCounts, setTransactionValueCounts] = useState([])
    const [transaction, setTransactions] = useState([])
    useEffect(() => {
        setTransactionValueCounts(
        [
            {
                type:'TRANSFER',
                count:1200,
            },
            {
                type:'WITHDRAW',
                count: 560,
            },
            {
                type:'CASH-IN',
                count: 400,
            },
            {
                type: 'CASH-OUT',
                count:230
            }
        ])

        setTransactions(
            [
                {
                  name: 'Page D',
                  uv: 2780,
                  pv: 3908,
                  cv: 4908,
                  dv: 1908,
                  amt: 2000,
                },
                {
                  name: 'Page E',
                  uv: 1890,
                  pv: 4800,
                  cv: 2133,
                  dv: 611,
                  amt: 2181,
                },
                {
                  name: 'Page F',
                  uv: 2390,
                  pv: 3800,
                  cv: 6774,
                  dv: 1233,
                  amt: 2500,
                },
                {
                  name: 'Page G',
                  uv: 3490,
                  pv: 4300,
                  cv: 722,
                  dv: 1111,
                  amt: 2100,
                },
            ]
        )
    
      return () => {
        
      }
    }, [])
    
    return(
        <div className="container">
            <h1>Transaction Analytics</h1>
            <div className="transaction-container">

                <div className="transaction-classes-container">
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundColor:'#fbfffe', borderRadius:'8pt', width:'100%'}}>
                        <div style={{ height:'80pt',display:'flex', flexDirection:'column', justifyContent:'center', borderBottom: 'solid 1pt #C2C2C2',width:'100%'}}>
                            <h1 style={{fontSize:'1.5rem', alignSelf:'flex-start', marginLeft:'10pt'}}>Transaction Types</h1>
                        </div>
                        
                        <div className="transaction-classes-grid">
                            
                                {
                                    transactionValueCounts.map((transaction)=>{
                                        return (
                                            <div className="grid-item" key={transaction.type}>
                                                <p>{transaction.type}</p>
                                                <h1>{transaction.count}</h1>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>

                <div className="transaction-analytics-container">
                    <div className="transaction-breakdown-container">
                        <div style={{ height:'80pt',display:'flex', flexDirection:'column', justifyContent:'center', borderBottom: 'solid 1pt #C2C2C2',width:'100%'}}>
                            <h1 style={{fontSize:'1.5rem', alignSelf:'flex-start', marginLeft:'10pt'}}>Breakdown</h1>
                        </div>

                        <div style={{display:'flex', flexDirection:'row', alignSelf:'flex-end', alignItems:'flex-start', margin:'5pt', marginRight:'10pt'}}>
                            <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginRight:'30pt'}}>
                                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                <h2 style={{color:'#C2C2C2', margin:'0pt', fontSize:'1.2rem', marginLeft:'5pt'}}>Download CSV</h2>
                            </div>

                            <h2 style={{color:"#C2C2C2", fontSize:'1.2rem', marginRight:'10pt',marginTop:'0pt', marginBottom:'0pt'}}>Monthly</h2>
                            <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>
                            
                        </div>

                        <div>
                            <BarGraph
                            color={['#04e824', '#FF3C38', '#1B2CC1', '#fe9000']}
                            data = {transaction}
                            width = {'100%'}
                            height = {300}
                            x = {['uv','pv','cv', 'dv']}></BarGraph>
                        </div>
                    </div>         
                </div>

            </div>
        
        </div>
    )
}
