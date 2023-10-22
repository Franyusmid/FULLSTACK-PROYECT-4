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

    console.log("data", data);

    const sendData = async () => {
      const response = await fetch(serverUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      const successData = await response.json();
      console.log("successData", successData);

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
      <div className="flex row justify-center">
        <form
          onSubmit={(e) => handleSubmit(e, newReservation)}
        >
          <div>
            <label>Cliente</label>
            <input className="border-indigo-500/100"
              name="title"
              onChange={(e) => handleChange(e)}
              value={newReservation.title}
              
            />
          </div>
          <div>
            <label>Tipo de reserva</label>
            <textarea
              name="description"
              onChange={(e) => handleChange(e)}
              value={newReservation.description}
            />
          </div>

          <button className="text-white bg-black">Crear reservación</button>
        </form>
     
      <main className="items-center">
        {reservations.length === 0 ? (
          <p>No hay reservaciones...</p>
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