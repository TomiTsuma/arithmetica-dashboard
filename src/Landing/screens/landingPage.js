'use client'
import Nav from "@/components/nav"
import "../styles/style.css"
import GradientButton from "../../components/button"
import { useRef, useEffect, useState } from "react"
import OutlineButton from "@/components/outline-button"

export default function LandingPage(){
    const [navColor, setNavColor] = useState()
    const scrollRef = useRef(null)
    const toggleNavColor=()=>{
        const position = window.pageYOffset;
        if(position > 10){
            setNavColor("#fbfffe99")
        }else{
            setNavColor()
        }
    }
    useEffect(() => {
        
        window.addEventListener("scroll", ()=>{
            toggleNavColor()
        })
      
    
      return () => {
        
      }
    }, [])
    

    return(
        <div className="landing-container">
        
        <div className="nav-section-1"></div>
        <Nav style={{backgroundColor: navColor}}/>
        <div className="section-1">
                <h1>
                    Unlock the true potential of your business data
                </h1>

                <h2>
                We provide state-of-the art data visualizations that help you get a real view of all the trends in company & industry data.
                Our Machine Learning models provide accurate predictions to help you see into the future of your company. 
                </h2>
                <div style={{alignItems:'center',alignSelf:'center',width:'60%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <GradientButton title='Book a Demo'></GradientButton>
                <h2>Start your Free Trial</h2>
                </div>
                </div>
        
        
        <div className="section-2">
        </div>
        <div className="section-2-bkg"></div>
        <div className="section-3">
        <h2>We take pride in supporting SaaS businesses</h2>
        <div style={{display:'flex', flexDirection:'row', width:'60vw', justifyContent:'space-evenly'}}>
        <div
        className="testimonial-icon"
        ></div>
        <div
        className="testimonial-icon"
        ></div>
        <div
        className="testimonial-icon"
        ></div>
        <div
        className="testimonial-icon"
        ></div>
        </div>
        </div>
        <div className="section-4">
            <h1>A Cohesive Data Sourcing & Analytics Platform for your Business</h1>
            <p>Core&Outline connects all your data sources into one cohesive data network ensuring you can gain insights into all your data.</p>
            <div className="data-network-container"></div>
            <OutlineButton title={'Start Integration'}></OutlineButton>
        </div>
        <div className="section-5">
        <div className="testimonial-img"></div>
        <div>
        <h2>"It's very difficult to resolve a problem when you don't know exactly what it is. Business owners currently have trouble getting all the information as to what is working for their businesses versus what is not. Hence they do not have much control over whether their businesses grow. We aim to restore control back to the business owners."</h2>
        <p>Thomas Tsuma, Founder</p>
        </div>
        </div>

        <div className="section-6">
        <div style={{display:"flex", flexDirection:'column', height:'40vh', justifyContent:'space-between'}}>
        <h1>core&outline</h1>
        <p>© 2023 Core&Outline Privacy  Policy  Terms of Service</p>
        </div>
        <div style={{display:"flex", flexDirection:'column', height:'30vh'}}>
            <h2>Platform</h2>
            <h3>Real-Time Analytics</h3>
            <h3>Event Streaming</h3>
            <h3>Visualizations</h3>
            <h3>Pricing</h3>
        </div>
        <div style={{display:"flex", flexDirection:'column', height:'30vh'}}>
            <h2>Solutions</h2>
            <h3>Customer Metrics</h3>
            <h3>Fraud Detection</h3>
            <h3>Application Analytics</h3>
            <h3>Product Performance</h3>
            <h3>Billing</h3>
            <h3>Forecasting & Predictions</h3>
        </div>
        <div style={{display:"flex", flexDirection:'column', height:'30vh'}}>
            <h2>Resources</h2>
            <h3>SDK</h3>
            <h3>API Reference</h3>
            <h3>Library</h3>
        </div>
        <div style={{display:"flex", flexDirection:'column', height:'30vh'}}>
            <h2>Company</h2>
            <h3>About Us</h3>
            <h3>Customers</h3>
            <h3>Contact</h3>
        </div>
        </div>

        </div>

    )
}