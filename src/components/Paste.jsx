import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeAllPastes } from '../redux/PasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Paste = () => {
 
   
 const paste = useSelector((state) => state.paste.pastes);
    
   
  const [searchTerm , setsearchTerm] = useState('');

  const dispatch = useDispatch();
   
   
  const filterData = paste.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteid){
     
      dispatch(removeAllPastes(pasteid));

  }
  const handleShare = () => {
    const currentUrl = window.location.href;

    // Copy the URL to the clipboard
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
       toast.success("Link copied to clipboard!");
      })
      .catch((error) => {
        console.error('Failed to copy link:', error);
        alert('Failed to copy the link.');
      });
    };

    const dateInIST =  Date(paste.createdAt).toLocaleString('en-GB', {
      timeZone: 'Asia/Kolkata',
    });
    console.log(dateInIST); // Output: "07/01/2025, 00:42:07"

    
    const truncateContent = (content, limit = 10) => {
      if (content.length > limit) {
        return content.substring(0, limit) + '...';
      }
      return content;
    };


      
    // const PasteDetails = ({ paste }) => {
    //   // Ensure paste.createdAt exists before formatting it
    //   const createdAtInIST = paste?.createdAt
    //     ? new Date(paste.createdAt).toLocaleString('en-GB', {
    //         timeZone: 'Asia/Kolkata',
    //       })
    //     : 'N/A'; // Fallback if createdAt is undefined
    //     }    
  return (
    <div>
      
       <div>
        <input 
         className='p-2 rounded-lg mt-2 min-w-[600px]'
          type='search'
          placeholder='search here'
          value={searchTerm}
          onChange={(e)=>setsearchTerm(e.target.value)}
           
           
            
             />
       </div>

       <div className='flex flex-col gap-6'>

         {
            filterData.length >0 &&
            filterData.map(

              (paste) =>{
              return (
                  <div className='border mt-2 ' key={paste?._id}>
                     

                      <div >

                      {paste.title}

                      </div>
                      <div>
                        {/* {paste.content} */}
                        {truncateContent(paste.content, 100)} 
                      </div>

                      <div className='flex flex-row gap-2 place-content-evenly'>
                         
                          <button className='text-white text-inherit'>
                          <Link to={`/?pasteId=${paste?._id}` } className='text-inherit text-white'>
                       
                             <p className='text-inherit text-white'> Edit </p>
                             </Link>
                          </button>
                          
                          <button className=''>
                          <Link to={`/pastes/${paste?._id}`} className='text-inherit text-white' >
                          View</Link>

                          </button>
                          
                          <button onClick={() => handleDelete(paste?._id)}>
                           Delete
                          </button>
                          
                          <button 
                             onClick={() =>{
                              navigator.clipboard.writeText(paste?.content);
                              toast.success("Copied to Clipboard Successfully");
                             }}
                            >
                              
                            Copy
                          </button>
                          
                          <button onClick={handleShare}>Share</button>
                           
                            

                      </div>
                      <div>
                          
                           {/* {createdAtInIST} */}
                           {/* {dateInIST}
                           <br>
                           </br> */}
                          {paste.createdAt}
                      </div>



                  
                  </div>


              )

              }

            )


         }
          
           
       </div>
     



    </div>
  )
}

export default Paste