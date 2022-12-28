import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


import TwitCln from '../componets/TwitCln'

export default function Home() {
  return(
    <div>
      {/* <script src="https://cdn.tailwindcss.com"></script> */}
{/* <div className="bg-red-500 w-8 h-8"></div> */}
      <TwitCln/>
    </div>
  ) 
}
