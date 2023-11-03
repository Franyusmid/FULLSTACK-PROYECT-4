import { useState, useEffect } from "react";

function reservation() {
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState({
    title: "",
    description: "",
  });

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  // HOOK
  // Manejar efectos laterales (procesos asíncronso)
  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch(serverUrl);
      const allReservations = await response.json();

      setReservations(allReservations.data);

      return;
    };

    fetchReservations();
  }, []);

  const handleSubmit = (e, data) => {
    e.preventDefault();

   
    const sendData = async () => {
      const response = await fetch(serverUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      const successData = await response.json();
      
      setReservations(successData.data);
    };

    sendData();
  };

  const handleChange = (e) => {
    setNewReservation({
      ...newReservation,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex row justify-evenly">
        <form
          onSubmit={(e) => handleSubmit(e, newReservation)}
          className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-10">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client">Cliente</label>
            <input
              name="title"
              onChange={(e) => handleChange(e)}
              value={newReservation.title}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
              focus:shadow-outline" id="client" type="text" placeholder="cliente"/>
          </div>
          <div className="mb-6">
            <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reservation">Pedido</label>
            <textarea
              name="description"
              onChange={(e) => handleChange(e)}
              value={newReservation.description}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="¿que desea ordenar?"
            />
             <p className="text-red-500 text-xs italic">por favor haga su pedido</p>
          </div>
          <div>

            <button className="bg-[#a8a47f] hover:bg-[#a8a47f] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Crear reservación</button>

          </div>
          
        </form>
     
      <main className="grid justify-center items-center">
        {reservations.length === 0 ? (
          <p className="text-2xl bg-cyan-300 shadow-2xl w-80 h-80 rounded-md flex justify-center items-center">No hay reservaciones...</p>
        ) : (
          reservations.map((e) => {
            return (
              <div key={e.id}>
                <h1>cliente:{e.title}</h1>
                <p>Tipo de reserva:{e.description}</p>
              </div>
            );
          }) 
        )}
       </main>
      </div>
    </>
  );
}

export default reservation;