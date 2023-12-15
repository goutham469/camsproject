import React from 'react'
import { useState } from 'react';
import { hashSync } from 'bcryptjs';
import { Navigate, useNavigate } from 'react-router-dom';
import './SignInStu.css'


function SignInStu() {
    let navigate=useNavigate()
    let [name,changeName]=useState()
    let [rool_no,changeRool_no]=useState()
    let [email,changeEmail]=useState()
    let [phno,changePhno]=useState()
    let [gender,changeGender]=useState()
    let [Password,changePassword] = useState()
    let [phError,changePhError]=useState()
    let [nameError,changeNameError]=useState()
    let [emailError,changeEmailError]=useState()
    let [rool_noError,changeRool_noError]=useState()

    function addUser(event)
    {
        event.preventDefault();
        if(1)
        {
            let obj={Name:name,RollNumber:rool_no,Email:email,PhoneNumber:phno,HistoryData:null,Gender:gender,Pass_word:hashSync(Password),User_Name:name+rool_no};
        console.log("user data object",obj);
        fetch("http://localhost:4000/Students",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        }).then(data=>console.log(data))
        console.log("data uploaded successfully")
        alert("account created");
        navigate("/Login")
        }
        else{alert("invalid")}
        
    }
    function validate() {
        if (String(phno).length != 10) {
            changePhError("Phone number must be of length 10");
            return false;
        } else {
            changePhError('');
        }
    
        if (String(name).trim().length == 0) {
            changeNameError("Name should not be empty");
            return false;
        } else {
            changeNameError('');
        }
    
        if (String(rool_no).trim().length == 0) {
            changeRool_noError("Roll number should not be empty");
            return false;
        } else {
            changeRool_noError('');
        }
    
        if (String(email).trim().length == 0) {
            changeEmailError("Email should not be empty");
            return false;
        } else {
            changeEmailError('');
        }
    
        return true;
    }
    
  return (
    <div className='row  '>
        <div className='col-lg-4'></div>
        <div className='col-lg-4 SignInStudentLabelDiv'>
        <div>
                <h1>Student SignIn process</h1>
                <form className='SignInStudentLabelForm'>
                    <label className='SignInStudentLabel'>Name</label><input className='SignInStudentInput' type='text' onChange={(event)=>{changeName(event.target.value);console.log(name)}}/><br/>
                    <label className='SignInStudentLabel'>Roll no</label><input className='SignInStudentInput' type='text' onChange={(event)=>{changeRool_no(event.target.value)}}/><br/>
                    <label className='SignInStudentLabel'>email</label><input className='SignInStudentInput' type='email' onChange={(event)=>{changeEmail(event.target.value)}}/><br/>
                    <label className='SignInStudentLabel'>phone no</label><input className='SignInStudentInput' type='number' onChange={(event)=>{changePhno(event.target.value)}}/><br/>
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
        <div className='col-lg-3'>
            <p>{phError}</p>
            <p>{nameError}</p>
            <p>{rool_noError}</p>
            <p>{emailError}</p>
        </div>
    </div>
  )
}

export default SignInStu;

// let gender;
//   if (form.elements['gender'].value) {
//     gender = form.elements['gender'].value;
//   }