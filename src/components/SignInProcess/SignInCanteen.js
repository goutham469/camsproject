import React from 'react'
import { useState } from 'react'
import { hashSync } from 'bcryptjs';
import './SignInCanteen.css'

function SignInCanteen() {
    let [name,changeName]=useState()
    let [email,changeEmail]=useState()
    let [phno,changePhno]=useState()
    let [gender,changeGender]=useState()
    let [Password,changePassword] = useState()
    let [shopType,changeShopType]=useState()
    function addUser(event){
        event.preventDefault();
        let obj={Name:name,Email:email,PhoneNumber:phno,Gender:gender,Pass_word:hashSync(Password),Shop_type:shopType,Food_items:null,User_Name:name};
        console.log(obj);
        fetch("http://localhost:4000/CanteenOwners",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        }).then(data=>console.log(data))
        console.log("data written successfully")
    }
  return (
    <div>
        
        <h1>Sign In profie for canteen owner</h1>
        <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4  b01'>
                <form>
                    <label className='SignInCanteenLabel'>Name</label><input type='text' placeholder='Name' onChange={(event)=>{changeName(event.target.value)}}/><br/>
                    <label className='SignInCanteenLabel'>phone</label><input type='number' onChange={(event)=>{changePhno(event.target.value)}}/><br/>
                    <label className='SignInCanteenLabel'>email</label><input type='email' onChange={(event)=>{changeEmail(event.target.value)}}/><br/>
                    <label>Gender:</label><br />
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        onChange={(event)=>{changeGender(event.target.value)}}
                    />
                    <label htmlFor="male">Male</label><br />
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"              
                        onChange={(event)=>{changeGender(event.target.value);console.log(gender)}}
                    /><label htmlFor="female">female</label>
                    <br/>
                    <label className='SignInCanteenLabel'>Shop type</label><input type='text' onChange={(event)=>{changeShopType(event.target.value)}}/><br/>
                    <label>password</label><input type='password' onChange={(event)=>{changePassword(event.target.value)}}/><br/>
                    <button className='SignInCanteenButton'  onClick={addUser}>Register</button>
                </form>
            </div>
            <div className='col-lg-4'></div>
        </div>
    </div>
  )
}

export default SignInCanteen;