import { useState,useEffect } from 'react'

import './App.css'

function App() {

  const [reservations,setReservations]=useState([]);
  const [newReservtion,setNewReservation]=useState({
    title:"",
    descripcion:""
  })
  const serverUrl = import.meta.env.VITE_SERVER_URL
 

  


  useEffect(()=>{
    const fetchReservations=async()=>{
      const response=await fetch(serverUrl);
      const AllReservations= await response.json();

      setReservations(AllReservations.data);
      

      return;

    };
    fetchReservations();
  },[]);

  const handleSumit=(e)=> {
    e.preventDefault()
    console.log(e)
  };
  const handleChange =(e)=> {
    console.log("e",e)
    console.log("nombre event", e.target.name)

    setNewReservation({
      ...newReservtion,
      [e.target.name]: e.target.value,

    })
  }

  return (
    <>
      <div className="w-full h-20 bg-black flex justify-center"> 
        <h1 className="text-[#efb810] font-typelittle text-5xl self-center">PIMIENTA NEGRA</h1>
        <h2 className="text-[#efb810] font-typelittle text-1xl self-center">LA RESETA EN EQUILIBRIO</h2>
      </div>
      <ul className='w-full h-auto'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      
    
    </>
  );
}

export default App;
