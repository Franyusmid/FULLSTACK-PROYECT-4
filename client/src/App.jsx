import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/imagenes/logo.png';
import Layout from './components/layout';
import Reservation from './components/reservation';
import Menu from './components/menu';
import AboutUs from './components/aboutUs';

function App() {
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState({
    title: "",
    descripcion: ""
  });
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch(serverUrl);
      const allReservations = await response.json();

      setReservations(allReservations.data);
    };

    fetchReservations();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (e) => {
    console.log("e", e);
    console.log("nombre event", e.target.name);

    setNewReservation({
      ...newReservation,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className='bg-[#a8a47f] flex flex-row'>
        
        <div className='basis-1/4 p-2 '>
          <img src={logo} className='h-56 w-56' />
        </div>
        <div className='grow w-full alig-item-center'>
          <h1 className='font-typelittle text-4xl grow m-1'>"LA RESETA EN EQUILIBRIO"</h1>
        </div>
      </div>
      <main>
      <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/reservation' element={<Reservation />}></Route>
              <Route path='/menu' element={<Menu />}></Route>
              <Route path='/aboutUs' element={<AboutUs />}></Route>
            </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;