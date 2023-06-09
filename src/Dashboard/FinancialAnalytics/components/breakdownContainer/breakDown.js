'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/style.css'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { colors } from '@/constants/colors'
export default function BreakDown(props){
    return(
        <div className="breakdown-container" style={{marginTop: '10pt'}}>
                            <h3>{props.title}</h3>
                            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        
                                <h2 style={{margin:'0pt'}}>Breakdown</h2>
                                <div style={{width:'30%', height:'25pt', background:'#FFF', border:'solid 1pt #C2C2C240', borderRadius:'5pt', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5pt', paddingRight:'5pt' }}>
                                    <p style={{textAlign:'left', left:0, color:'#C2C2C2', fontSize:'1rem'}}>Monthly</p>
                                    <FontAwesomeIcon icon={faSortDown} style={{color:'#000'}}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <p style={{marginBottom: '0pt'}}>Best</p>
                                <p style={{color: colors.green, marginBottom: '0pt'}}>January</p>
                            </div>
                            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <p style={{marginBottom: '0pt'}}>Average</p>
                                <p style={{color: colors.green, marginBottom: '0pt'}}>43,000</p>
                            </div>
                            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <p style={{marginBottom: '0pt'}}>Average Growth Rate</p>
                                <p style={{color: colors.green, marginBottom: '0pt'}}>12%</p>
                            </div>
                            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <p style={{marginBottom: '0pt'}}>Latest Growth</p>
                                <p style={{color: colors.green, marginBottom: '0pt'}}>12%</p>
                            </div>

                            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <p style={{marginBottom: '0pt'}}>Worst</p>
                                <p style={{color: colors.red, marginBottom: '0pt'}}>June</p>
                            </div>
                            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <p style={{marginBottom: '0pt'}}>Average Decline Rate</p>
                                <p style={{color: colors.red, marginBottom: '0pt'}}>12%</p>
                            </div>
                            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <p style={{marginBottom: '0pt'}}>Latest Decline</p>
                                <p style={{color: colors.red, marginBottom: '0pt'}}>12%</p>
                            </div>

                            

                        </div>
    )
}