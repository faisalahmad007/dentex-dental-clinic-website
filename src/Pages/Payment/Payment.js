import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';
import payment from '../../images/payment.png';
import './Payment.css';

const DentalClinic = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const{user} = useAuth();
    const onSubmit = data => console.log(data);
    return (
    
    <div className="container">
    <div className="row">
    <div className="col-lg-6 col-md-8 col-sm-8 col-xs-6">
      <form className="payment-form" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("Name")} placeholder="Name" />
      <input  defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
      <input defaultValue="" {...register("payment method")} placeholder="Payment method"/>
      {errors.email && <span className="error">This field is required</span>}
      
      <input type="submit" style={{backgroundColor:'darkCyan'}} />
    </form>

 
    </div>
    <div className="col-lg-6 col-md-8 col-sm-8 col-xs-6">
        <img src={payment} alt="payment" style={{width: '100%', height: 'auto'}}/>
    </div>
    </div>
    </div>
    );
};

export default DentalClinic;