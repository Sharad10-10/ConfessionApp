import { deleteDoc, doc} from 'firebase/firestore'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';



const Confessions = ({text}) => {


    const deleteConfession = async (id)=> {
        await deleteDoc(doc(db,'confessions', id))
        toast.success("Confession Deleted Successfully")
    }


    dayjs.extend(relativeTime)
    const createdAt = doc.createdDate?.toDate()
    const timeAgo = dayjs(createdAt).fromNow()
    

  return (


    <div className='flex gap-4 justify-start flex-wrap px-42 mt-8'>

    {text.length === 0 ? <div className='text-center w-screen mt-32'>"No Confessions Found"</div> : text.map((text)=> {
        const createdAt = text.createdDate?.toDate()
        const formattedDate = createdAt?.toLocaleDateString()
      return (
        <div key = {text.id} className='h-52 w-[30%] border border-[#84849C] rounded p-2 overflow-y-auto break-words'>  
          <div className='flex justify-between'>
          <p className='text-center text-sm'>Confessed At: {formattedDate}</p>
          <FaEdit className='cursor-pointer ml-24 text-lg' />
          <FaTrash onClick={()=> deleteConfession(text.id)} className='cursor-pointer' />
          </div>
          
           <div className=''>
            <div className='pt-4 px-2'>{text.content}</div>

            <div className='text-sm pt-8'>{timeAgo}</div>
           </div>

        </div>
      )
    })}

  </div>
  )
}

export default Confessions