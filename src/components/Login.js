import React from 'react'
import { useState } from 'react';
import { hashSync } from 'bcryptjs';
import { compareSync } from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  let navigate=useNavigate()
    let [userName,changeUserName]=useState()
    let [password,changePassword]=useState()
    function changeUserNamefun(event){console.log(event.target.value);changeUserName(event.target.value)}
    function changePasswordfun(event){console.log(event.target.value);changePassword(event.target.value)}
    function addUser(event){event.preventDefault();
    // fetch the local appi to check the user
    fetch(`http://localhost:4000/Students/?User_Name=${userName}`).then(data=>data.json()).then(data=>{
      if(data.length==0){
        // else fetch canteen owners data
          fetch(`http://localhost:4000/CanteenOwners/?User_Name=${userName}`).then(data1=>data1.json()).then(data1=>{
        if(data1.length==0){
          // else fetch faculty data
          fetch(`http://localhost:4000/Faculty/?User_Name=${userName}`).then(data2=>data2.json()).then(data2=>{
        if(data2.length==0){alert("invalid user name")}
        else{
          if(!compareSync(password,data1[0].Pass_word)){alert("invalid password")}
          else{alert("you got it")}
        }
      })
        }
        else{
          if(!compareSync(password,data1[0].Pass_word)){alert("invalid password")}
          else{alert("you got it")}
        }
      })
      }
      else{
        if(!compareSync(password,data[0].Pass_word)){alert("invalid password")}
        else{alert("you got it");navigate('/UserDash',{state:data[0]})}

      }
    })
    
    console.log(userName,password);
    }
  return (
    <div className='row bbgh'>
      <div className='col-lg-4'></div>
      <div className='col-lg-4'>
        <div className='LoginPagediv'>
          <h1>Login Page</h1>
          <form>
              <label className='LoginPageUser'>user name</label><input type='text' onChange={changeUserNamefun}/><br/>
              <label className='LoginPageUser' >pasword</label><input type='password' onChange={changePasswordfun}/><br/>
              <button className='LoginPageUserButton' onClick={addUser}>Login</button>
          </form>
          <Link to="/SignIn">does not have account?create new</Link>
      </div>
      </div>
    </div>
  )
}
// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';

// import './login.css'
// function Login() {
//   return (
//     <div className='row'>
//         <div className='col-lg-4'></div>
//         <div className='col-lg-4'>
//         <div className='LoginPagediv'>
//         <h1>Login Page</h1>
//         <form>
//             <label className='LoginPageUser'>user name</label><input className="typer"type='text'/><br/>
//             <label className='LoginPageUser' >pasword</label><input type='password'/><br/>
//             <button className='LoginPageUserButton'>Login</button>
//         </form>
//     </div>
//         </div>
//         <div className='col-lg-4'></div>
//     </div>
//   )
// }


export default Login;