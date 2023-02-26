import { async } from "@firebase/util";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, updateDoc, deleteDoc, doc, getDocs, } from 'firebase/firestore'
import { db, storage } from '../config/firebase'
const eventSlice=createSlice({
    name:'eventSlice',
    initialState:{fireBaseWalyEvents:[]},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchEvents.fulfilled,(state,actions)=>{
            console.log(actions.payload,'payload wala data');
            
            let newState: any = {
                ...state, fireBaseWalyEvents: actions.payload
            }
            console.log(state.fireBaseWalyEvents, 'fireBaseWalyEvents');
            return newState
        })

    }
})
export const {}=eventSlice.actions
export default eventSlice.reducer
export const fetchEvents = createAsyncThunk('fetch/todo', async () => {
    try {
        const QuerySnapshot = await getDocs(collection(db, 'events'));
        let eventsList: any = []
        QuerySnapshot.forEach((doc: any) => {
            eventsList.push({...doc.data(),id:doc.id})
            console.log(doc.data(),doc.id,'events from event wala page');
        })
        console.log(eventsList,'list of events');
        
        return eventsList
    }
    catch (e) {
        console.log(e);
    }
});