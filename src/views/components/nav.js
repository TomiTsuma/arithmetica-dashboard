import { icon } from "@fortawesome/fontawesome-svg-core"
import "../../assets/styles/globals.css"
import "../../assets/styles/nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
export default function AlternativeNavbar(){
    return(
        <div className="side-navbar-container">
        <FontAwesomeIcon icon={faDatabase} color="#FFFFFF" style={{fontSize:'20pt'}}/>
        <FontAwesomeIcon icon={faDatabase} color="#FFFFFF" style={{fontSize:'20pt'}}/>
        <FontAwesomeIcon icon={faDatabase} color="#FFFFFF" style={{fontSize:'20pt'}}/>
        </div>
    )
}