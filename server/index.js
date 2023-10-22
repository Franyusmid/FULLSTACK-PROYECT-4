// / 1. IMPORTACIONES
import express from "express";
import cors from "cors";

// 2. INICIALIZADORES
const app = express();

app.use(cors());
app.use(express.json());

let data = [
  {
    id: 0,
    title: "",
    description: "",
  },
  {
    id: 1,
    title: "",
    description: "",
  },
];

// 3. RUTAS
// GET - OBTENCIÓN DE DATOS (RESERVACIONES)
// localhost:3005/
app.get("/", (req, res) => {
  res.json({
    msg: "Este es un mensaje",
    data: data,
  });
});

// POST - CREAR UNA RESERVACIÓN
app.post("/", (req, res) => {
  console.log("req", req.body);

  const { title, description } = req.body;

  data.push({
    title,
    description,
  });

  res.json({
    msg: "Reservación agregada",
    data: data,
  });
});

// 4. LISTENERS
app.listen(3005, () => console.log("servidor encendido"));
