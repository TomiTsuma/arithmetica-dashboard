import "../styles/style.css"
import { useState, useEffect } from 'react'
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BarGraph from "@/components/visualizations/bar"
import LineGraph from "@/components/visualizations/line"
import TextInput from "@/components/textField"

export default function Forecasting(){
    const [revenueForecast, setRevenueForecast] = useState([])
    const [mrrForecast, setMRRForecast] = useState([])
    const [userForecast, setUserForecast] = useState([])
    const [churnForecast, setChurnForecast] = useState([])
    const [timeUnit, setTimeUnit] = useState({
        unit: 'Months',
        steps: 6,
    })

    useEffect(() => {
      setRevenueForecast([
        {
            name: 'January',
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'February',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'March',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'April',
            uv: 2780,
            pv: 3908,
            amt: 2000,
          },
          {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
          },
          {
            name: 'June',
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'July',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
              name: 'August',
              uv: 2410,
              pv: 5215,
              amt: 2100,
          },
          {
              name: 'September',
              uv: 8239,
              pv: 2000,
              amt: 2100,
          },
          {
              name: 'October',
              uv: 1000,
              pv: 2000,
              amt: 2100,
          },
          {
              name: 'November',
              uv: 6000,
              pv: 7120,
              amt: 2100,
          },
          {
              name: 'December',
              uv: 4500,
              pv: 3100,
              amt: 2100,
          },
        ]
      )

      setMRRForecast([
        {
            name: 'January',
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'February',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'March',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'April',
            uv: 2780,
            pv: 3908,
            amt: 2000,
          },
          {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
          },
          {
            name: 'June',
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'July',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
              name: 'August',
              uv: 2410,
              pv: 5215,
              amt: 2100,
          },
          {
              name: 'September',
              uv: 8239,
              pv: 2000,
              amt: 2100,
          },
          {
              name: 'October',
              uv: 1000,
              pv: 2000,
              amt: 2100,
          },
          {
              name: 'November',
              uv: 6000,
              pv: 7120,
              amt: 2100,
          },
          {
              name: 'December',
              uv: 4500,
              pv: 3100,
              amt: 2100,
          },
    ]
      )

      setUserForecast([
        {
            name: 'January',
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'February',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'March',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'April',
            uv: 2780,
            pv: 3908,
            amt: 2000,
          },
          {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
          },
          {
            name: 'June',
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'July',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
              name: 'August',
              uv: 2410,
              pv: 5215,
              amt: 2100,
          },
          {
              name: 'September',
              uv: 8239,
              pv: 2000,
              amt: 2100,
          },
          {
              name: 'October',
              uv: 1000,
              pv: 2000,
              amt: 2100,
          },
          {
              name: 'November',
              uv: 6000,
              pv: 7120,
              amt: 2100,
          },
          {
              name: 'December',
              uv: 4500,
              pv: 3100,
              amt: 2100,
          },
    ]
      )

      setChurnForecast([
        {
            name: 'January',
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'February',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'March',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'April',
            uv: 2780,
            pv: 3908,
            amt: 2000,
          },
          {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
          },
          {
            name: 'June',
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'July',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
              name: 'August',
              uv: 2410,
              pv: 5215,
              amt: 2100,
          },
          {
              name: 'September',
              uv: 8239,
              pv: 2000,
              amt: 2100,
          },
          {
              name: 'October',
              uv: 1000,
              pv: 2000,
              amt: 2100,
          },
          {
              name: 'November',
              uv: 6000,
              pv: 7120,
              amt: 2100,
          },
          {
              name: 'December',
              uv: 4500,
              pv: 3100,
              amt: 2100,
          },
    ]
      )
    
      return () => {
        
      }
    }, [])
    
    return(
        <div className="container">
            <h1>Forecasting</h1>
            <div className="forecasting-container">
                <div className="metric-forecast-container">
                    <div style={{ width: '40%', display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:'40vh', alignSelf:'flex-start' }}>
                        <h2 className="metric-title">Revenue</h2>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
                            <h1 style={{margin:'0pt'}}>KSh. {revenueForecast.reduce((accumulator, current) =>{ return accumulator + current.uv;}, 0)}</h1>
                            <h2 style={{color: '#C2C2C2', fontSize:'1.2rem', marginLeft:'10pt'}}>Next 12 months</h2>
                        </div>
                        <p style={{fontSize:'1.5rem'}}>
                        "Over the next 12 months you'll bill KSh 10550 from your customers with a growth rate of 12%"
                        </p>
                        
                    </div>

                    <div style={{ width: '60%', display:'flex', flexDirection:'column', justifyContent:'space between', alignItems:'flex-end' }}>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                            <h2 style={{color:'#C2C2C2', margin:'0pt', fontSize:'1.2rem', marginLeft:'5pt'}}>Download CSV</h2>
                        </div>
                        <BarGraph
                            color={["#1B2CC1"]}
                            data = {revenueForecast}
                            width = {700}
                            height = {500}
                            showCartesianGrid = {false}
                            x = {['uv']}></BarGraph>
                    

                    </div>

                </div>

                <div className="metric-forecast-container">
                    <div style={{ width: '40%', display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:'40vh', alignSelf:'flex-start' }}>
                        <h2 className="metric-title">Monthly Recurring Revenue</h2>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
                            <h1 style={{margin:'0pt'}}>KSh. {revenueForecast.reduce((accumulator, current) =>{ return accumulator + current.pv;}, 0)}</h1>
                            <h2 style={{color: '#C2C2C2', fontSize:'1.2rem', marginLeft:'10pt'}}>Next 12 months</h2>
                        </div>
                        <p style={{fontSize:'1.5rem'}}>
                        "Over the next {timeUnit.steps} {timeUnit.unit} your MRR KSh 24,012 from your customers with a growth rate of 12%"
                        </p>
                        <div className="forecasting-parameter">
                            <h2>Time Units</h2>
                            <TextInput hint={'Select a Time Unit to use'}></TextInput>
                        </div>
                        <div className="forecasting-parameter">
                            <h2>Steps</h2>
                            <TextInput hint={'Number of steps to predict'}></TextInput>
                        </div>
                        
                    </div>

                    <div style={{ width: '60%', display:'flex', flexDirection:'column', justifyContent:'space between', alignItems:'flex-end' }}>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                            <h2 style={{color:'#C2C2C2', margin:'0pt', fontSize:'1.2rem', marginLeft:'5pt'}}>Download CSV</h2>
                        </div>
                        <LineGraph
                            keys = {['pv']}
                            data = {mrrForecast}
                            width = {800}
                            xaxis = {'name'}
                            yaxis = {'uv'}
                            height = {500}></LineGraph>
                    

                    </div>

                </div>

                <div className="metric-forecast-container">
                    <div style={{ width: '40%', display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:'40vh', alignSelf:'flex-start' }}>
                        <h2 className="metric-title">Customers</h2>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
                            <h1 style={{margin:'0pt'}}>{userForecast.reduce((accumulator, current) =>{ return accumulator + current.pv;}, 0)}</h1>
                            <h2 style={{color: '#C2C2C2', fontSize:'1.2rem', marginLeft:'10pt'}}>Next 12 months</h2>
                        </div>
                        <p style={{fontSize:'1.5rem'}}>
                        "Over the next {timeUnit.steps} {timeUnit.unit} you'll have 181 customers with a growth rate of 12%"
                        </p>
                        <div className="forecasting-parameter">
                            <h2>Time Units</h2>
                            <TextInput hint={'Select a Time Unit to use'}></TextInput>
                        </div>
                        <div className="forecasting-parameter">
                            <h2>Steps</h2>
                            <TextInput hint={'Number of steps to predict'}></TextInput>
                        </div>
                        
                    </div>

                    <div style={{ width: '60%', display:'flex', flexDirection:'column', justifyContent:'space between', alignItems:'flex-end' }}>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                            <h2 style={{color:'#C2C2C2', margin:'0pt', fontSize:'1.2rem', marginLeft:'5pt'}}>Download CSV</h2>
                        </div>
                        <LineGraph
                            keys = {['uv']}
                            data = {mrrForecast}
                            width = {800}
                            xaxis = {'name'}
                            yaxis = {'uv'}
                            height = {500}></LineGraph>
                    

                    </div>

                </div>
            </div>
        
        </div>
    )

}