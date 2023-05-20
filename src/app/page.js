'use client'
import {Landing, UserHomeScreen, DataSources} from '@/views/index.js'
import '../assets/styles/globals.css'

export default function Home() {
  return (
    <main >
      <div className='container'>
        <DataSources/>
      </div>
    </main>
  )
}
