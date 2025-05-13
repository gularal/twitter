import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import AuthContext from "../contexts/authContext";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },  
  } = useForm({
    mode: "onChange", 
  });

  const handleSignUp = (data) => {

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div className="form">
        <div className='userNameField'>
          <label htmlFor='adsoyad'>Username</label>
          <input 
            type='text' 
            id="adsoyad" 
            {...register("adsoyad", { required: "Bu Alan Zorunludur" })} 
          />
        </div>
        <span>
          {errors.adsoyad && errors.adsoyad.message.toString()}
        </span>
        
        <div className='userNick'>
          <label htmlFor='nick'>Kullanıcı Adı</label>
          <input 
            type='text' 
            id="nick" 
            {...register("nick", { required: "Bu Alan Zorunludur" })} 
          />
        </div>
        <span>
          {errors.nick && errors.nick.message.toString()}
        </span>
        
        <div className='email'>
          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            id="email" 
            {...register("email", { required: "Bu Alan Zorunludur" })} 
          />  
        </div>
        <span>
          {errors.email && errors.email.message.toString()}
        </span>
        
        <div className='sifre'>
          <label htmlFor='sifre'>Şifre</label>
          <input 
            type='password' 
            id="sifre" 
            {...register("password", { required: "Bu Alan Zorunludur" })} 
          />
        </div>
        <span>
          {errors.password && errors.password.message.toString()}
        </span>
        
        <button type="submit">Kayıt Ol</button>
      </div>
    </form>
  );
};

export default SignUp;