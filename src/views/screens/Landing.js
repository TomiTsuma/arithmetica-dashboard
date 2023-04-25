import Navbar from '../components/Navbar'
import '../../assets/styles/landing.css'
import TimeSeries from '../components/tsa/TimeSeries.js'
export default function Landing(){
    return (
        <div className='landing-container'>
        <div className='section-1'>
            <Navbar></Navbar>

            <h1>
            Unlock the true potential of your business data
            </h1>

            <p>
            We provide state-of-the art data visualizations that help you get a real view of all the trends in company & industry data.
            Our Machine Learning models provide accurate predictions to help you see into the future of your company. 
            The icing on the cake is the descriptive analytics that help you understand your company success and how to replicate it or how to remedy any failures
            </p>
            <button>SIGN UP</button>
            
            </div>
            <div className='section-2'>
            <TimeSeries></TimeSeries>
            <div className='section-2-description'>
            <h1>Get a glimpse into the future.</h1>
            <p>Gain access to all of our prediction and forecasting models and see what the future holds for your company</p>
            <p>At Arithmetica, we give you a brief look into the past while all the while making sure you stay focused on the future!</p>
            <button>REQUEST A DEMO</button>
            </div>
            </div>
        </div>
    )
}