import Navbar from '../components/Navbar'
import '../../assets/styles/landing.css'
import TimeSeries from '../components/tsa/TimeSeries.js'
import LineGraphNoBkg from '../components/visualizations/line2'
export default function Landing(){
    const data = [{'created_at': '2021-03-21', 'amount': 1000.0},
    {'created_at': '2021-10-17', 'amount': 7100.0},
    {'created_at': '2021-10-24', 'amount': 10000.0},
    {'created_at': '2021-11-14', 'amount': 5005.0},
    {'created_at': '2022-02-20', 'amount': 7203.63},
    {'created_at': '2022-02-27', 'amount': 6084.05},
    {'created_at': '2022-03-06', 'amount': 7266.66},
    {'created_at': '2022-03-13', 'amount': 12210.52},
    {'created_at': '2022-03-20', 'amount': 6730.76},
    {'created_at': '2022-03-27', 'amount': 4546.66},
    {'created_at': '2022-04-03', 'amount': 5199.94},
    {'created_at': '2022-04-10', 'amount': 5033.28},
    {'created_at': '2023-04-17', 'amount': 5012.92},
    {'created_at': '2023-04-24', 'amount': 5011.53},
    {'created_at': '2023-05-01', 'prediction': 5134.34},
    {'created_at': '2023-05-08', 'prediction': 4898.40},
    {'created_at': '2023-05-15', 'prediction': 6550.11},
    {'created_at': '2024-05-22', 'prediction': 6264.95},
    {'created_at': '2024-05-29', 'prediction': 6514.16},
    {'created_at': '2024-06-05', 'prediction': 7676.35},
    {'created_at': '2024-06-12', 'prediction': 6397.34},
    {'created_at': '2024-06-19', 'prediction': 5909.11},
    {'created_at': '2024-06-26', 'prediction': 7030.78},
    {'created_at': '2024-07-03', 'prediction': 7388.14}
  ]

  const mrr = [
    {'created_at': '2021-03-21', 'amount': 1000.0},
    {'created_at': '2021-10-17', 'amount': 7100.0},
    {'created_at': '2021-10-24', 'amount': 10000.0},
    {'created_at': '2021-11-14', 'amount': 5005.0},
    {'created_at': '2022-02-20', 'amount': 7203.63},
    {'created_at': '2022-02-27', 'amount': 6084.05},
    {'created_at': '2022-03-06', 'amount': 7266.66},
    {'created_at': '2022-03-13', 'amount': 12210.52},
    {'created_at': '2022-03-20', 'amount': 6730.76},
    {'created_at': '2022-03-27', 'amount': 4546.66},
    {'created_at': '2022-04-03', 'amount': 5199.94},
    {'created_at': '2022-04-10', 'amount': 5033.28},
    {'created_at': '2023-04-17', 'amount': 5012.92},
    {'created_at': '2023-04-24', 'amount': 5011.53},
    {'created_at': '2021-10-17', 'amount': 5134.34},
    {'created_at': '2021-10-24', 'amount': 4898.40},
    {'created_at': '2023-05-15', 'amount': 6550.11},
    {'created_at': '2024-05-22', 'amount': 6264.95},
    {'created_at': '2024-05-29', 'amount': 6514.16},
    {'created_at': '2024-06-05', 'amount': 7676.35},
    {'created_at': '2024-06-12', 'amount': 6397.34},
    {'created_at': '2024-06-19', 'amount': 5909.11},
    {'created_at': '2024-06-26', 'amount': 7030.78},
    {'created_at': '2024-07-03', 'amount': 7388.14},
    {'created_at': '2024-06-05', 'amount': 7676.35},
    {'created_at': '2024-06-12', 'amount': 6397.34},
    {'created_at': '2024-06-19', 'amount': 5909.11},
    {'created_at': '2024-06-26', 'amount': 7030.78},
    {'created_at': '2024-07-03', 'amount': 7388.14},
    
  ]
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
            <TimeSeries data={data}></TimeSeries>
            <div className='section-2-description'>
            <h1>Get a glimpse into the future.</h1>
            <p>Gain access to all of our prediction and forecasting models and see what the future holds for your company</p>
            <p>At Arithmetica, we give you a brief look into the past while all the while making sure you stay focused on the future!</p>
            <button>REQUEST A DEMO</button>
            </div> 
            </div>

            <div className='section-3'>
            <div className='section-3-description'>
            <h1>Let us focus on your KPI metrics.</h1>
            <p>Are you a startup trying to focus on achieving your KPIs but don’t have the time to monitor them closely? Make use of our Perseus, our startup package, where all the key metrics worth monitoring are already set up.</p>
            </div>
            <div className='image'>
            <LineGraphNoBkg data={mrr} width={400} height={100}></LineGraphNoBkg>
            </div>
            </div>
            
        </div>
    )
}