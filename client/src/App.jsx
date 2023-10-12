import { useState,useEffect } from 'react'

import './App.css'

function App() {



  const [reservations,setReservations]=useState([]);
  const serverUrl = import.meta.env.VITE_SERVER_URL
  console.log(serverUrl)


  useEffect(()=>{
    const fetchReservations=async()=>{
      const response=await fetch(serverUrl);
      const AllReservations= await response.json();

      setReservations(AllReservations.data);

      return;

    };
    fetchReservations();
  },[]);

  return (
    <>
     {reservations.length === 0 ? (
     <p>no hay reservaciones...</p>
     ):(
        reservations.map((e)=> {
          return (
            <div key={e.id}>
              <h1>{e.title}</h1>
              <p>Descripcion: {e.descripcion}</p>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
