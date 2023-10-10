
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
      id:0,
     title:"reservación 1",
      descripcion:"quiero una reservacion a colombia"
 }  ]

//3.RUTAS
//localhost:3005/

app.get("/",(req,res)=>{

    res.json({
        msg:"Este es un menssaje",
        data:data
    })
})

//4.LISTENERS

app.listen(3005,() => console.log("servidor encendido"))

