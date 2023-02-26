import React from 'react'
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from 'react-redux'
import {fetchEvents} from '../store/eventSlice'

import useRouter from 'next/router'
import { toast } from 'react-toastify'
const useEvents = () => {
    const router=useRouter
    const dispatch=useDispatch()
    useEffect(()=>{
  dispatch(fetchEvents())
    },[])
   const addingEvent=()=>{
router.push('/login')
   }
   const deleteHandler=()=>{
    toast.error('SomeThing went wrong')
   }
  return {addingEvent,deleteHandler
  }
}
export default useEvents