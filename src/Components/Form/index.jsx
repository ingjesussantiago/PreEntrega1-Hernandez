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
  }; // your form submit function which will invoke after successful validation

const handleClose =() =>{
  setFormVis(false);
}

  return (

    <>
   
    <Modal show={formVis} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Body>
      
      <label>Nombre</label>
      <input
        {...register("nombre", {
          required: true,
          minLength: 2,
         })}
      />
      {errors?.nombre?.type === "required" && <p>El campo es requerido</p>}
      {errors?.nombre?.type === "minLength" && (
        <p>El nombre debe superar los 2 caracteres</p>
      )}
    
      <label>Email</label>
      <input type="email"  {...register("email", {minLength:3, required: true})} />
      {errors?.email?.type === "minLength" && (
        <p>El mail debe tener minimo 3 caracteres</p>
      )}
      {errors?.email?.type === "required" && <p>El campo email es requerido</p>}
      <label>Telefono</label>
      <input type="tel"{...register("telefono", { minLength:10, maxLength:10, required: true})} />
      {errors?.telefono?.type === "minLength" && (
        <p>EL numero Telefonico debe tener 10 Digitos</p>
      )}
      {errors?.telefono?.type === "required" && <p>Colocar su numero a 10 Digitos</p>}
     

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