import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, storage } from '../config/firebase'
import { addDoc, collection, updateDoc, deleteDoc, doc, getDocs, } from 'firebase/firestore'
import { toast } from "react-toastify";
const addEventSlice = createSlice({
    name: 'addSlice',
    initialState: { events: [],error:null },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addNewEvent.fulfilled, (state, actions) => {
            console.log(actions.payload,'payload wala datat');
            
            let newState: any = { ...state, events: actions.payload }
            state=newState
            console.log(state,'state wala data');
            
        });
    
    }
})
// export const { } = addEventSlice.actions
export default addEventSlice.reducer
export const addNewEvent:any = createAsyncThunk('add/event', async (event: any,actions:any) => {
    
    try {
    console.log(event,'thunk wala event');
        const newDocument = await addDoc(collection(db, 'events'), event)
        // let newItems = { ...items, id: newDocument.id }
        // console.log(newDocument);
        toast.success('Successfully added')
        
        return event
    }
    catch (e) {
        toast.error('there is some error')
        console.log(e, 'catch wala error');
    }
})