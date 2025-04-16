import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AddConfessionPost from './components/AddConfessionPost'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase'
import Confessions from './components/Confessions'
import { ToastContainer } from 'react-toastify'

const App = () => {

  const [text, setText] = useState([]);

  useEffect(()=> {
    const getNotes = async()=> {
      const confessionRef = collection(db, 'confessions');
      onSnapshot(confessionRef, (snapshot)=>{
        const confessionLists = snapshot.docs.map((doc)=>{
          
          return {
            id : doc.id,
            ...doc.data()

          };
          
        });

        
        setText(confessionLists);
        return confessionLists;
      })
    };
    getNotes()
  }, []);


  return (
    <>
        <Navbar />
        <AddConfessionPost />
        <Confessions text = {text}/>
        <ToastContainer position='top-left'/>
       

    </>
  )
}

export default App