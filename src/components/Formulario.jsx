import React from 'react';
import { Formik, Form, Field } from 'formik';
//import {ErrorMessage} from 'formik';
import Alerta from './Alerta';
import * as Yup from 'yup';

const Formulario = () => {

  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
               .min(3, 'El nombre es muy corto')  
               .max(40, 'El nombre es muy largo')
               .required('El nombre del cliente es obligatorio'),
    empresa: Yup.string()
                .required('El nombre de la empresa es obligatorio'),
    email: Yup.string()
              .email('Email no valido')
              .required('El email es obligatorio'),
    telefono: Yup.number()
                  .integer('El número no es valido')
                  .positive('El número no es valido')
                  .typeError('El número no es valido'),
  })

  const handleSubmit = (values) =>{
    console.log(values)
  }

  return (
    <div
      className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'
    >
      <h1
        className='tex-gray-600 font-bold text-xl uppercase'
      >Agregar cliente</h1>

      <Formik
        initialValues={{
          nombre : '',
          empresa: '',
          email: '',
          telefono: '',
          notas: '',
        }}
        onSubmit = {(values) =>{
          handleSubmit(values)
        }}
        validationSchema = {nuevoClienteSchema}
      >
        {({errors, touched})=>{
          console.log(touched)
        return(        
          <Form
            className='mt-10'
          >
            <div>
              <label 
                className='text-gray-800'
                htmlFor='nombre'
              >
                Nombre
              </label>
              <Field 
                id = 'nombre'
                type= 'text'
                className= 'mt-2 block w-full p-3 bg-gray-50'
                placeholder = 'Nombre del cliente'
                name = 'nombre'
              />
              {errors.nombre && touched.nombre? 
                (
                  <Alerta>{errors.nombre}</Alerta>
                ): null
              }
              {/* <ErrorMessage name='nombre'/> */}
            </div>

            <div>
              <label 
                className='text-gray-800'
                htmlFor='empresa'
              >
                Empresa
              </label>
              <Field 
                id = 'empresa'
                type= 'text'
                className= 'mt-2 block w-full p-3 bg-gray-50'
                placeholder = 'Empresa del cliente'
                name = 'empresa'
              />
              {
              errors.empresa && touched.empresa? 
                (
                  <Alerta>{errors.empresa}</Alerta>
                ): null
              }
            </div>

            <div>
              <label 
                className='text-gray-800'
                htmlFor='email'
              >
                Email
              </label>
              <Field 
                id = 'email'
                type= 'email'
                className= 'mt-2 block w-full p-3 bg-gray-50'
                placeholder = 'Email'
                name = 'email'
              />
              {
              errors.email && touched.email? 
                (
                  <Alerta>{errors.email}</Alerta>
                ): null
              }
            </div>

            <div>
              <label 
                className='text-gray-800'
                htmlFor='telefono'
              >
                Telefono
              </label>
              <Field 
                id = 'telefono'
                type= 'tel'
                className= 'mt-2 block w-full p-3 bg-gray-50'
                placeholder = 'Telefono'
                name = 'telefono'
              />
              {
              errors.telefono && touched.telefono? 
                (
                  <Alerta>{errors.telefono}</Alerta>
                ): null
              }
            </div>

            <div>
              <label 
                className='text-gray-800'
                htmlFor='notas'
              >
                Notas
              </label>
              <Field 
                as= 'textarea'
                id = 'notas'
                type= 'tel'
                className= 'mt-2 block w-full p-3 bg-gray-50 h-40'
                placeholder = 'Notas del cliente'
                name = 'notas'
              />
              {
              errors.notas && touched.notas? 
                (
                  <Alerta>{errors.notas}</Alerta>
                ): null
              }
            </div>

            <input type="submit"
              value='Agregar cliente'
              className = 'mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
            />
          </Form>
        )}}
      </Formik>
    </div>
  )
}

export default Formulario