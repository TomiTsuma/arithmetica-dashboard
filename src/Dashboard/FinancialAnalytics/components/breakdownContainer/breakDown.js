'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/style.css'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { colors } from '@/constants/colors'
import { commafyNumber } from '@/helpers/commafy'
import DropDown from '@/components/dropdown/dropDown'
export default function BreakDown(props){
    return(
        <div className="breakdown-container" style={{marginTop: '10pt'}}>
                            <h3>{props.title}</h3>
                            <div style={{width:'95%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        
                                <h2 style={{margin:'0pt'}}>Breakdown</h2>
                                <DropDown 
                                list={[{id:1, name:'Daily'},{id:2, name:'Monthly'},{id:3, name:'Annually'}]}
                                width={'45%'}></DropDown>
                            </div>
                            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <p style={{marginBottom: '0pt'}}>Best</p>
                                <p style={{color: colors.green, marginBottom: '0pt'}}>January</p>
                            </div>
                            <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <p style={{marginBottom: '0pt'}}>Average</p>
                                <p style={{color: colors.green, marginBottom: '0pt'}}>{commafyNumber(43000)}</p>
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