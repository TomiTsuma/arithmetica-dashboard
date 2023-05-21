'use client'
import Image from 'next/image'
import pageStyles from './page.module.css'
import {LandingPage} from '@/Landing/index.js'


export default function Home() {
  return (
    <main className={pageStyles.main}>
      <LandingPage></LandingPage>
    </main>
  )
}
