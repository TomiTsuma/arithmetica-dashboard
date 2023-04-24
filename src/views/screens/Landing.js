import Navbar from '../components/Navbar'
import '../../assets/styles/landing.css'
import TimeSeries from '../components/tsa/index'
export default function Landing(){
    return (
        <div className='landing-container'>
            <Navbar></Navbar>

            <h1>
            Unlock the true potential of your business data
            </h1>

            <h2>
            We provide state-of-the art data visualizations that help you get a real view of all the trends in company & industry data.
            Our Machine Learning models provide accurate predictions to help you see into the future of your company. 
            The icing on the cake is the descriptive analytics that help you understand your company success and how to replicate it or how to remedy any failures
            </h2>

            <TimeSeries></TimeSeries>
            <button>SIGN UP</button>
        </div>
    )
}