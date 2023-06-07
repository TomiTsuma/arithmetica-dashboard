import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/style.css"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"

export default function QuerySelection(){
    return(
        <div className="backdrop">
            <div className="query-selection-container">
                <h1>Query</h1>
                <div style={{display:'flex', flexDirection:'row', width:'90%', justifyContent:'space-between'}}>
                    <div style={{width:'40%'}}>
                        <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1.5rem', marginTop:'0pt'}}>
                            Select a filter
                        </p>
                        <div style={{width:'100%', height:'35pt', background:'#FFF', border:'solid 2pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
                            <p style={{textAlign:'left', left:0, color:'#C2C2C2', fontSize:'1rem'}}>Add a filter</p>
                            <FontAwesomeIcon icon={faSortDown} style={{color:'#000'}}></FontAwesomeIcon>
                        </div>

                        <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem'}}>
                        Select some of your previously created queries for this Data Source to filter the data as appropriately needed
                        </p>
                    </div>
                    <div style={{width:'50%'}}>
                        
                        <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1.5rem', marginTop:'0pt'}}>
                            Create a new filter
                        </p>
                        <div style={{ minHeight: '200pt', justifyContent:'space-between', display:'flex', flexDirection:'column'}}>
                        <div style={{width:'100%', height:'35pt', background:'#FFF', border:'solid 2pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
                            <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem'}}>Select a database</p>
                            <FontAwesomeIcon icon={faSortDown} style={{color:'#000'}}></FontAwesomeIcon>
                        </div>
                        <div style={{width:'100%', height:'35pt', background:'#FFF', border:'solid 2pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
                            <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem'}}>Select a table</p>
                            <FontAwesomeIcon icon={faSortDown} style={{color:'#000'}}></FontAwesomeIcon>
                        </div>
                        <div style={{width:'100%', height:'35pt', background:'#FFF', border:'solid 2pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
                            <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem'}}>Select a column</p>
                            <FontAwesomeIcon icon={faSortDown} style={{color:'#000'}}></FontAwesomeIcon>
                        </div>
                        <div style={{width:'100%', height:'35pt', background:'#FFF', border:'solid 2pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
                            <p style={{textAlign:'left', left:0, color:'#000', fontSize:'1rem'}}>Add a condition</p>
                            <FontAwesomeIcon icon={faSortDown} style={{color:'#000'}}></FontAwesomeIcon>
                        </div>
                        </div>
                    </div>
                    </div>
            
            </div>
        </div>
    )
}