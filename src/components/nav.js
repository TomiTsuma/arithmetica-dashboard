'use client'
import "../assets/style/nav.css"
import "../assets/style/globals.css"
import GradientButton from "./button"
export default function Nav(props)
{
    return (
        <div className="nav-container" style={props.style}>
                <div className="selections-container">
                    <h1>Core&Outline</h1>
                    <div style={{display:'flex', flexDirection:'row', width:'40%', justifyContent:'space-between'}}>
                    <h2>Products</h2>
                    <h2>Pricing</h2>
                    <h2>Resources</h2>
                    <h2>About Us</h2>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', width:'20%', justifyContent:'space-between'}}>
                    <h2>Login</h2>
                    <GradientButton title='Start Free Trial'></GradientButton>
                    </div>
                </div>
        </div>
    )
}