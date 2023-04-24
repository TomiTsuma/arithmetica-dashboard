import "../../assets/styles/globals.css"
import "../../assets/styles/nav.css"
export default function Navbar()
{
    return (
        <div className="nav-container">
                

                <div className="selections-container">
                <h1>Arithmetica</h1>
                    <h2>Products</h2>
                    <h2>Pricing</h2>
                    <h2>Resources</h2>
                    <h2>About Us</h2>
                </div>


                <div className="login-container">
                    <h2>Login</h2>
                    <h2>Demo</h2>
                </div>
        </div>
    )
}