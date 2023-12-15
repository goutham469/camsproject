import React from 'react'
import { useState } from 'react';
import { hashSync } from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import './SignInFac.css'

function SignInFac() {
    let navigate=useNavigate();
    let [name,changeName]=useState()
    let [rool_no,changeRool_no]=useState()
    let [email,changeEmail]=useState()
    let [phno,changePhno]=useState()
    let [gender,changeGender]=useState()
    let [Password,changePassword] = useState()

    function addUser(event)
    {
        event.preventDefault();
        let obj={Name:name,RollNumber:rool_no,Email:email,PhoneNumber:phno,HistoryData:null,Gender:gender,Pass_word:hashSync(Password),User_Name:name+rool_no};
        console.log("user data object",obj);
        fetch("http://localhost:4000/Faculty",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        }).then(data=>console.log(data))
        console.log("data uploaded successfully");
        alert("your account created successfully");
        navigate("/Login");

    }
  return (
    <div className='row'>
        <div className='col-lg-4'></div>
        <div className='col-lg-4'>
            <div className='SignInStudentLabelDiv'>
            <h2>Faculty Sign In portal</h2>
            <form className='SignInStudentLabelForm'>
                <label className='SignInStudentLabel'>Name</label><input className='SignInStudentInput' type='text' onChange={(event)=>{changeName(event.target.value);console.log(name)}}/><br/>
                <label className='SignInStudentLabel'>Rool no</label><input className='SignInStudentInput' type='text' onChange={(event)=>{changeRool_no(event.target.value)}}/><br/>
                <label className='SignInStudentLabel'>email</label><input className='SignInStudentInput' type='email' onChange={(event)=>{changeEmail(event.target.value)}}/><br/>
                <label className='SignInStudentLabel'>phne no</label><input className='SignInStudentInput' type='number' onChange={(event)=>{changePhno(event.target.value)}}/><br/>
                <label>Gender:</label><br />
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={(event)=>{changeGender(event.target.value)}}
                />
                <label htmlFor="male" className='SignInStudentLabelGen'>Male</label><br />
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={(event)=>{changeGender(event.target.value);console.log(gender)}}
                />
                <label htmlFor="female" className='SignInStudentLabelGen'>Female</label><br /><br />
                <label className='SignInStudentLabel'>password</label><input className='SignInStudentInput' type='password' onChange={(event)=>{changePassword(event.target.value)}}/><br/>
                <button className='btn btn-success' onClick={addUser}>Register</button>
            </form>
        </div>
        </div>
    </div>
  )
}


export default SignInFac;