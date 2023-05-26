'use client'
import "../assets/style/nav.css"
import "../assets/style/globals.css"
import { faChartPie, faBars, faUser, faLineChart, faMobile, faMoneyBill, faDatabase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SideNav(){
    return(
        <div className="side-navbar-container">
            <div className="logo"></div>
            <div className="icon">
                <FontAwesomeIcon icon={faDatabase} color="#fbfffe" style={{fontSize:'24pt'}}/>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faChartPie} color="#fbfffe" style={{fontSize:'24pt'}}/>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faUser} color="#fbfffe" style={{fontSize:'24pt'}}/>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faLineChart} color="#fbfffe" style={{fontSize:'24pt'}}/>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faMobile} color="#fbfffe" style={{fontSize:'24pt'}}/>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faMoneyBill} color="#fbfffe" style={{fontSize:'24pt'}}/>
            </div>


        </div>

    )
}