import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
export default function Home() {

  const [data , setData] = useState(null)


useEffect(() => {


  const process =  'http://localhost:3001/api/reviews'

const res = axios.get(process).then(res => {

  console.log('response',res.data)
  setData(res.data)
})


}
, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


<div>
  <h1>response : {data?.length}</h1>
</div>

   
   

    </div>
  )
}
