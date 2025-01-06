import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';
import toast from 'react-hot-toast';


 const initialState= {
    pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []

  }

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {


     const paste  =action.payload;

     const alreadyExists = state.pastes.some(p => p.title === paste.title);

     if (alreadyExists) {
      toast.error("A paste with this title already exists");
  }
            
      else{
        state.pastes.push(paste);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
            toast.success("Paste Created Succesfully");
      }
    

    },
    updateToPastes: (state,action) => {

      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if(index>=0){
        state.pastes[index] = paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));

        toast.success("Paste Updated Succesfully");
      }
      
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];

      localStorage.removeItem("pastes");
    
    },
    removeAllPastes: (state,action) =>{

      const pasteid = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteid);
       
       if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste deleted Succesfully");
       }


    
    },
  }
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes,removeAllPastes } = PasteSlice.actions

export default PasteSlice.reducer