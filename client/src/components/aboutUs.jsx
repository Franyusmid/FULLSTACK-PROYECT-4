
import logo from '../assets/imagenes/pizza.png';
const aboutUs =()=> {
    return (

      <div>
        <h1>ACERCA DE NOSOTROS</h1>
        <div className='w-full p-10 flex flex-row'>
          <div className='ml-10 grow h-14 w-14'>
            <img src={logo} className='h-80 w-80 rounded-md' />
          </div>
          <div className='grow h-14 w-14'>
            <h2>el corazon del sabor</h2>
          </div>
        </div>
        
      
      </div>

    )
  }
  
  export default aboutUs;