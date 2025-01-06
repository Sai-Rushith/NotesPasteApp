
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

import { addToPastes, updateToPastes } from '../redux/PasteSlice';


const ViewPaste = () => {
   const {id} = useParams();

   const allpastes = useSelector((state) => state.paste.pastes);

   const paste = allpastes.filter((p) => p._id === id)[0];


  return (
    <div>

    <div className=' flex place-content-between'>
      <input className='p-2 rounded-2xl mt-2 w-[70%]'
        type='text'
        placeholder='Enter Title Here'
        value={paste.title}
        disabled
        onChange={(e) => setTitle(e.target.value)}
         
      />

      {/* <button onClick={createpaste}>{
       
         pasteId?"Update My Paste":"Create My Paste"
        
        }</button> */}

</div>


<div className='mt-8'>
  <textarea

className='p-4 rounded-2xl min-w-[500px] '
     value={paste.content}
     placeholder='Enter the Content...'
     disabled
     onChange={(e) => setvalue(e.target.value)}

      rows={15}
      cols={20}
     
  
  />
</div>

  </div>
  )
}

export default ViewPaste