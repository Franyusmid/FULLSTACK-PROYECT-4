

import { useState,useEffect } from 'react'
import './App.css'
import logo from './assets/imagenes/logo.png'


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
     <div className='bg-[#a8a47f] flex flex-row'>
         <div className=' basis-1/4 p-2'>
           <img src={logo} className='h-56 w-56'/>
          </div>
          <div className=" flex items-center">
            <h1 className=" font-typelittle text-4xl ">"LA RESETA EN EQUILIBRIO"</h1>
          </div>
          <rf/>
          <nav className='p'>
             <a href="./components/menu">MENU</a>
             <a href="./components/aboutUs">SOBRRE NOSOTROS</a>
             <a href={reservation}>RESERVACIONES</a>
          </nav>
    </div>
    </>
  );
}

export default App;
