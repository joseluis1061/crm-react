import { useEffect, useState } from "react";
import Cliente from "../components/Cliente";

const Inicio = () => {
  const [clientes, setClientes] = useState([]);
  
  useEffect(()=>{
    const obtenerClientes = async () =>{
      try{
        const url = import.meta.env.VITE_API_URL;
        const response = await fetch(url);
        const resultado = await response.json();
        setClientes(resultado)
      }catch(error){
        console.log(error)
      }
    };
    obtenerClientes();
  },[]);

  const handleDeleted = async id =>{
    const confirmar = confirm('¿Deseas Eliminar Este Cliente?') 
    if(confirmar){
      try{
        const url = `${import.meta.env.VITE_API_URL}/${id}`;      
        const response = await fetch(url,
          {
            method : 'DELETE'
          }
        )
  
        const nuevosClientes = clientes.filter(cliente => cliente.id !== id);
  
        setClientes(nuevosClientes)
  
      }catch(error){
        console.log(error)
      }
    }     
  }

  return (
    <>
      <h1 
        className='font-black text-4xl text-blue-900'
      >
        Clientes
      </h1>
      <p className='mt-3'>
        Administra tus clientes
      </p>
      <table
        className="w-full mt-5 table-auto shadow bg-white"
      >
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map(cliente => (
            <Cliente 
              key = {cliente.id}
              cliente = {cliente}
              handleDeleted = {handleDeleted}
            />
          ))}
        </tbody>

      </table>
    </>
  )
}

export default Inicio