import { icon } from "@fortawesome/fontawesome-svg-core"
import "../../assets/styles/globals.css"
import "../../assets/styles/nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDatabase, faChartPie, faBars, faBank  } from "@fortawesome/free-solid-svg-icons"
export default function AlternativeNavbar(){
    return(
        <div className="side-navbar-container">

        <div className="bars-icon">
        <FontAwesomeIcon icon={faBars} color="#FFFFFF"/>

        </div>

        <div className="icon">
        <FontAwesomeIcon icon={faBank} color="#FFFFFF"/>
        </div>

        <div className="icon">
        <FontAwesomeIcon icon={faDatabase} color="#FFFFFF"/>
        </div>

        <div className="icon">
        <FontAwesomeIcon icon={faChartPie} color="#FFFFFF"/>
        </div>

        </div>
    )
}