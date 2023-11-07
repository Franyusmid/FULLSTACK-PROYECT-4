

const aboutUs =()=> {
    return (

      <div>
        
        <div className='w-full p-10 flex flex-row grid-flow-col gap-20'>
          <div className='pb-10'>
            <img src="https://photos.google.com/photo/AF1QipO3Wmq5ZEH0Z_6C-tsfwa-gdOxPahlbwXMtbMzw" 
            className='h-80 w-80 pb-10 rounded' />
          </div>
          <div className='flex-col max-w-2xl'>
            <h2 className='text text-2xl flex justify-center'>NUESTRA MISION</h2>
            <br />
            <spam className=" font-bold">Ayudar a concientizar a las personas de la importancia de una correcta 
              alimentación para vivir una vida en EQUILIBRIO.</spam>
            
            <h3 className='text text-2xl flex justify-center'>HISTORIA</h3>
            <br />
            <article>
              <p>Pimienta Negra nace siendo una finca distribuidora de verduras y 
                hortalizas a otros restaurantes de la ciudad de Medellín hace más de 15 años. 
                Uno de esos insumos que distribuía y por el cual era reconocido, era la lechuga. 
                De ahí a que nuestro logo tenga a la lechuga como su principal componente.</p>
                <br/>
                <p>Hacía el año 2008, se tuvo la gran idea de que Pimienta Negra 
                  pasará de ser un distribuidor de hortalizas de otros restaurantes, 
                  a ser su propio proveedor con un restaurante ubicado en Vía Primavera, Parque Lleras. 
                  Nace de esta forma el primer Pimienta negra  de la ciudad y que hoy en día sigue en funcionamiento.</p>
            </article>
          </div>
        </div>
        
      
      </div>

    )
  }
  
  export default aboutUs;