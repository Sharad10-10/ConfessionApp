import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { db} from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';


const AddConfessionPost = () => {

    const [text, setText] = useState();

    const addConfession = async()=> {
        if (text) {
          try {
            const confessionRef = collection(db, 'confessions');
            await addDoc(confessionRef, {
              content : text,
              createdDate : new Date()
            })
            setText('')
            toast.success("Confession Added Successfully...")
          }
          

          catch (error) {
            console.log(error)
          }
        }
    }


  return (
    <>
      <center className=''>
        <div className='h-74 w-[60%] border border-[#84849C] rounded mt-20'>
            <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add Your Confession...' className='mt-2 p-6 text-xl resize-none outline-none' rows='6' cols='74'>
            </textarea>
            <button onClick={addConfession} className='bg-[#84849C] p-4 text-white border-none rounded-md w-32 cursor-pointer'>Confess</button>
        </div>

        <div className='flex items-center justify-center gap-1 mt-1'>
            <FaLock size={'10'} />
            <small>Confessed Note will remain for 24hrs</small>
        </div>
    </center>

    
    </>

    
  )
}

export default AddConfessionPost