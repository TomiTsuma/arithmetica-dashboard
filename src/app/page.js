'use client'
import {Landing, UserHomeScreen, DataSources, Customer, Forecast} from '@/views/index.js'
import '../assets/styles/globals.css'

export default function Home() {
  return (
    <main >
      <div className='container'>
        <Forecast/>
      </div>
    </main>
  )
}
