
//1. IMPORTACIONES 
// ESModules 
import express from "express"

// 2.INICIALIZADORES
const app =express()

const data=[{
    id:0,
    title:"reservación 1",
    descripcion:"quiero una reservacion a colombia"
},   {
      id:1,
     title:"reservación 1",
      descripcion:"quiero una reservacion a colombia"
 }  ]

//3.RUTAS
//GET-OBTENCION DE DATOS (RESERVACIONES)
//localhost:3005/


app.get("/",(req,res)=>{

    res.json({
        msg:"Este es un menssaje",
        data:data
    })
})

// POST-CREA UNA RESERVACION 
app.post("/",(req,res)=>{

    data.push({
        id:2,
        title:"reservacion 2",
        descripcion:"quiero una reservacion de mesa para 2 personas"
    })

    res.json({
        msg:"reservacion agregada",
        data:data,
    })
})

//4.LISTENERS

app.listen(3005,() => console.log("servidor encendido"))

