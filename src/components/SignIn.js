import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './SignIn.css'
import 'bootstrap/dist/css/bootstrap.css';
import pic1 from './images/studentIcon.png'
import pic2 from './images/FacultyIcoon.png'
import pic3 from './images/CanteenOwner.png'
import pic4 from './images/StationaryOwner.png'

function SignIn() {
    let navigate=useNavigate();
   function navToSignInStu(){
    navigate('/SignInStu')
    }
    function navToSignFac(){
        navigate('/SignInFac')
        }
        function navToSignCan(){
            navigate('/SignInCanteen')
            }
  return (
    <div className='detail'>
        <h1 className='heading'>Sign in page</h1>
        <div className='row'>
            <div className='col-lg-2'></div>
            <div className='col-lg-2 signIncomp' onClick={navToSignInStu}>
                <h2>Student</h2>
                <img src={pic1}></img>
            </div>
            <div className='col-lg-2 col-md-3 signIncomp' onClick={navToSignFac}>
                <h2>Faculty</h2>
                <img src={pic2}></img>
            </div>
            <div className='col-lg-2 col-md-3 signIncomp' onClick={navToSignCan}>
                <h2>Canteen owner</h2>
                <img src={pic3}></img>
            </div>
            <div className='col-lg-2 col-md-3 signIncomp' onClick={navToSignCan}>
                <h2>stationary owner</h2>
                <img src={pic4}></img>
            </div>
        </div>
    </div>
  )
}



export default SignIn;