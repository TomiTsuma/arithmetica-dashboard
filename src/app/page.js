'use client'
import {Landing, UserHomeScreen, DataSources, Customer} from '@/views/index.js'
import '../assets/styles/globals.css'

export default function Home() {
  return (
    <main >
      <div className='container'>
        <Customer/>
      </div>
    </main>
  )
}
