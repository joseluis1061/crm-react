import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from '../components/Formulario';

const EditarCliente = () => {
  const [cliente, setCliente] = useState([]);
  const [cargando, setCargando] = useState(true);
  const {id} = useParams();

  useEffect(()=>{
    const obtenerClienteApi = async () =>{
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setCliente(data);
      }catch(error){
        console.log(error);
      }
      setCargando(!cargando);
    }
    obtenerClienteApi();
  }, []);

  return (
    <>
      <h1 
        className='font-black text-4xl text-blue-900'
      >
        Editar Cliente
      </h1>
      <p className='mt-3'>
        Utilizá este formulario para editar datos de un cliente
      </p>

      {cliente?.nombre ?(
        <Formulario
          cliente = {cliente}
          cargando = {cargando}
        />
      ) : <p>{`Cliente de id ${id} no valido`}</p>
      }
    </>
  )
}

export default EditarCliente