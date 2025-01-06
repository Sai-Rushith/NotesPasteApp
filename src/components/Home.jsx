import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { addToPastes, updateToPastes } from '../redux/PasteSlice';



const Home = () => {
   const [title,setTitle] = useState('');
   const [value,setvalue] = useState('');
   const [searchParams,setsearchparams] = useSearchParams();

   const pasteId = searchParams.get("pasteId");
   const dispatch =useDispatch();
const allpastes = useSelector((state) => state.paste.pastes);

useEffect(() =>{
 
  if(pasteId){
    const paste = allpastes.find((p)=>p._id === pasteId);
    setTitle(paste.title);
    setvalue(paste.content);
   
  }

  
}, [pasteId])

   function createpaste(){
    const paste = {

      title : title,
      content : value,
      _id: pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString(),

    }


if(pasteId){
 //update

  dispatch(updateToPastes(paste));
  
}
else{
  //create
    dispatch(addToPastes(paste));
   
} 

 setTitle('');
 setvalue('');
 setsearchparams({}); 

   }




  return (
    <div>

      <div className=' flex place-content-between'>
        <input className='p-2 rounded-2xl mt-2 w-[70%]'
          type='text'
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
           
        />

        <button onClick={createpaste}>{
         
           pasteId?"Update My Paste":"Create My Paste"
          
          }</button>

</div>


  <div className='mt-8'>
    <textarea

className='p-4 rounded-2xl min-w-[500px] '
       value={value}
       placeholder='Enter the Content...'
       onChange={(e) => setvalue(e.target.value)}

        rows={15}
        cols={20}
       
    
    />
  </div>

    </div>
  )
}

export default Home