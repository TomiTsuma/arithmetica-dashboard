'use client'
import {Landing, UserHomeScreen} from '@/views/index.js'
import '../assets/styles/globals.css'
import DataCard from '@/views/components/data-cards.js/cards'
import BarGraph from '@/views/components/visualizations/bar'
export default function Home() {
  return (
    <main >
      <div className='container'>
        <DataCard></DataCard>
      </div>
    </main>
  )
}
