import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Layout from './components/layout';
import Reservation from './components/reservation';

import AboutUs from './components/aboutUs';

function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <div className='bg-[#a8a47f] flex flex-row h-32'>
          <div className='basis-1/4 p-2 '>
            <img src="https://photos.google.com/photo/AF1QipOTtmS7sSGQuXcO8sNP9ppuqpRu7aC6T5Fwqa1L"
             className='h-28 w-28' />
          </div>
          <div className='grow w-full h-full flex justify-evenly items-center'>
            <h1 className=' text-3xl font-typelittle'>LA RESETA EN EQUILIBRIO</h1>
          </div>
        </div>
        <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/*' element={<Navigate to="/aboutUs" />} />
          </Route>
        </Routes>
        </main>
        <footer>
          <div className='bg-[#a8a47f] text-3xl font-typelittle  w-full h-14 flex justify-center items-center'>
            <h2>¡TE ESPERAMOS!</h2>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
