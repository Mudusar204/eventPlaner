import React from 'react'
import { useState,useEffect } from "react"
import { useDispatch } from 'react-redux'
import {addNewEvent} from "../store/addEventSlice"
import { useRouter } from 'next/router'
const useAddevent = () => {
    const router=useRouter()
    const [loader,setLoader]=useState(false)
    const [title,setTitle]=useState("")
    const [datee,setDatee]=useState('')
    const [time,setTime]=useState('')
    const [location,setLocation]=useState('')
    const [discription,setDiscription]=useState('')
    const [invities,setInvities]=useState('')
    const [event,setEvent]=useState<any>({})
    const dispatch=useDispatch()
    useEffect(()=>{
        setEvent({
            titlea:title,datea:datee,timea:time,locationa:location,discriptiona:discription,invitiesa:invities,

        })
    },[title,datee,time,location,discription,invities]);
    const addEventHandler=()=>{
dispatch(addNewEvent(event))
router.push('/Events')

    }
  return {
    title,
    setTitle,
    datee,
    setDatee,
    time,
    setTime,
    location
    ,setLocation,
    discription
    ,setDiscription,
    invities,
    setInvities,
    addEventHandler,
    loader,
    setLoader,event,setEvent
  } 
}

export default useAddevent