'use client'
import "../assets/style/nav.css"
import "../assets/style/globals.css"
import { faChartPie, faBars, faUser, faLineChart, faMobile, faMoneyBill, faDatabase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function SideNav(){
    const [isHovered, showExtendedView] = useState(false)
    return(
        <div className="side-navbar-container" style={{width: isHovered && '15vw'}} onMouseEnter={()=>{showExtendedView(true)}} onMouseLeave={()=>{showExtendedView(false)}}>
            <div className="logo"></div>
            <div className="icon">
                <FontAwesomeIcon icon={faDatabase} color="#fbfffe" style={{fontSize:'24pt', width:'30pt'}}/>
                {
                    isHovered && <h2 style={{marginLeft:'10pt'}}>Data Sources</h2>
                }
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faUser} color="#fbfffe" style={{fontSize:'24pt', width:'30pt'}}/>
                {
                    isHovered && <h2 style={{marginLeft:'10pt'}}>Customers</h2>
                }
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faLineChart} color="#fbfffe" style={{fontSize:'24pt', width:'30pt'}}/>
                {
                    isHovered && <h2 style={{marginLeft:'10pt'}}>Forecasting</h2>
                }
            </div>
            
            <div className="icon">
                <FontAwesomeIcon icon={faMoneyBill} color="#fbfffe" style={{fontSize:'24pt', width:'30pt'}}/>
                {
                    isHovered && <h2 style={{marginLeft:'10pt'}}>Transactions</h2>
                }
            </div>

            <div className="icon">
                <FontAwesomeIcon icon={faMobile} color="#fbfffe" style={{fontSize:'24pt', width:'30pt'}}/>
                {
                    isHovered && <h2 style={{marginLeft:'10pt'}}>Application Analytics</h2>
                }
            </div>


        </div>

    )
}