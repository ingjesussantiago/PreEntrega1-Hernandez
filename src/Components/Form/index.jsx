import React from 'react'
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FormComp = ({confirmaCompra, formVis ,setFormVis }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (dataDelFormulario) => {
    confirmaCompra(dataDelFormulario)
  };

const handleClose =() =>{
  setFormVis(false);
}

  return (

    <>
   
    <Modal show={formVis} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Datos de Cliente</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Body>
      <div className='container d-flex row'>

      <label>Nombre</label>
      <input type="name"{...register("nombre", {required: true,minLength: 2,})}/>
      {errors?.nombre?.type === "required" && <p>Requiere su Nombre</p>}
      {errors?.nombre?.type === "minLength" && (
        <p>El nombre debe superar los 2 caracteres</p>
      )}
    
      <label>Email</label>
      <input type="email"  {...register("email", {minLength:3, required: true})} />
      {errors?.email?.type === "minLength" && (
        <p>El mail debe tener minimo 3 caracteres</p>
      )}
      {errors?.email?.type === "required" && <p>Escriba su correo electronico</p>}
      <label>Telefono</label>
      <input type="tel"{...register("telefono", { minLength:10, maxLength:10, required: true})} />
      {errors?.telefono?.type === "minLength" && (
        <p>EL numero Telefonico debe tener 10 Digitos</p>
      )}
      {errors?.telefono?.type === "required" && <p>Colocar su numero de Telefono 10 Digitos</p>}
     
      </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Confirma su Compra
        </Button>
      </Modal.Footer>
    </form>
    </Modal>
  </>

  
  );
}

export default FormComp