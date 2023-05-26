import { useEffect,useState } from "react";
import "../../styles/style.css"

export default function CustomerMetrics(){
    return(
        <div className="customer-metrics-container">
            <div style={{ width:'20%', alignItems:'flex-start', paddingLeft:'10pt', display:'flex', flexDirection:'column'}}>
                <div className="metrics-subtitle">
                    <h2>REVENUE</h2>
                </div>
                <div className="metric">
                    <p>MRR</p>
                </div>
                <div className="metric">
                    <p>Net Revenue</p>
                </div>
                <div className="metric">
                    <p>MRR Growth Rate</p>
                </div>

                <div className="metrics-subtitle">
                    <h2>CUSTOMER</h2>
                </div>
                <div className="metric">
                    <p>ARPU</p>
                </div>
                <div className="metric">
                    <p>LTV</p>
                </div>
                <div className="metric">
                    <p>New Customers</p>
                </div>
                <div className="metric">
                    <p>Active Customers</p>
                </div>
                <div className="metric">
                    <p>Near Churned Customers</p>
                </div>
                <div className="metric">
                    <p>Churned Customers</p>
                </div>

                <div className="metrics-subtitle">
                    <h2>CHURN</h2>
                </div>
                <div className="metric">
                    <p>Customer Churn</p>
                </div>
                <div className="metric">
                    <p>Revenue Churn</p>
                </div>

                <div className="metrics-subtitle">
                <h2>TRIAL INSIGHTS</h2>
                </div>
                <div className="metric">
                    <p>Trial Insights</p>
                </div>
            </div>


            <div style={{ width:'80%', alignItems:'flex-start', paddingLeft:'10pt', display:'flex', flexDirection:'column' }}></div>
        </div>
    )
}