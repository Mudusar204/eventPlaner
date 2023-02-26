import Head from 'next/head'
import Image from 'next/image'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Text,Center} from '@chakra-ui/react'
// import Login from './Login'
import Navbar from '../components/navbar/Navbar'

export default function Home() {
  return (
    <div>
    {/* <h1>hello word this is new word </h1> */}
    {/* <Text fontSize={'2xl'} backgroundColor='red'>Event planer</Text> */}
    {/* <Login/> */}
    <Navbar/>
    <Center> <Text fontSize={'5xl'}>Event Planner</Text></Center>
    <Image src={'/headerImg.jpg'} alt='main img' width={1400} height={800}/>
    </div>
  )
}
