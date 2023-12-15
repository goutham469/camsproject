import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './UserDashBoard.css';
import img1 from './cartImage.png';
import img2 from './leftarrow.png';
import img3 from './rightarrow.png';
import img4 from './descriptionImage.png';
import img02 from './discounted.jpeg'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UserDashBoard() {
     let navigate=useNavigate();
    let state=useLocation()
    console.log(state.state)
    state=state.state
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const location = useLocation();
    const userState = location.state;

    useEffect(() => {
        fetchDataFromAPIs();
    }, []);

    const fetchDataFromAPIs = async () => {
        try {
            const responseA = await fetch("http://localhost:4000/CanteenOwners/?Name=a");
            const dataA = await responseA.json();
            setData(dataA[0].Food_items || []);

            const responseB = await fetch("http://localhost:4000/CanteenOwners/?Name=b");
            const dataB = await responseB.json();
            setData1(dataB[0].Food_items || []);

            const responseC = await fetch("http://localhost:4000/CanteenOwners/?Name=c");
            const dataC = await responseC.json();
            setData2(dataC[0].Food_items || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    let orders=[]
    function addToCart(obj){console.log(obj);orders.unshift(obj)}
    function redirectToSlotAvailability(){console.log(orders);navigate("/Cart",{state:orders})}
    return (
        <div>
        <h2 className='font02'>User Dashboard</h2>
        <div>
            <div className='row'>
                <div className='col-lg-4 userDetails'>
                    <h3>user details</h3>
                    <p>Hi {state.Name}</p>
                    <p>we wish you a good day</p>
                </div>
                <div className='col-lg-4'>
                    <input type='text' placeholder='Search' className='searchBarForCanteenUser'/>
                </div>
                <div className='col-lg-4'>
                    <img onClick={redirectToSlotAvailability} className="cartImage" src={img1}></img>
                </div>
            </div>
            <div className='row col-lg-12 col-md-12'>
            </div>
            <div className='row col-lg-12'>
                {/* display discount products */}
                <div className='row'>
                    <div className='col-lg-2'>
                        <img className='leftArrow' src={img2}></img>
                    </div>
                    <div className='col-lg-8'>
                        <img className='discountedImage' src={img02}></img>
                    </div>
                    <div className='col-lg-2 '>
                        <img className='leftArrow' src={img3}></img>
                    </div>
                </div>
                </div>
            {/* <div className='row'>
                 
                search filter
                fetch data from api of food products
                if no filter is applied display any one filter 
                else if selected fetch that api data and display it ony
            </div> */}
            <h1 className='text-l'>Fast food</h1>
            <div className='row row01'>
                {
                    data.map(obj=><div className='UserDashBoardProductDiv col-lg-3'><img className='menuPic01' alt='no image' src={obj.image}></img><h4>{obj.product_name}</h4><img className='descriptionImage' src={img4}></img><h3>{obj.price}</h3><button className='btn btn-warning' onClick={()=>{addToCart(obj)}}>add cart</button></div>)
                }
            </div>
            <h2>Bakery</h2>
            <div className='row row02'>
                {
                    data1.map(obj=><div className='UserDashBoardProductDiv col-lg-3'><img className='menuPic01' alt='no image' src={obj.image}></img><h4>{obj.product_name}</h4><img className='descriptionImage' src={img4}></img><h3>{obj.price}</h3><button  className='btn btn-warning' onClick={()=>{addToCart(obj)}}>add cart</button></div>)
                }
            </div>
            <h2>cool drinks</h2>
        w<div className='row row03'>
                {
                    data2.map(obj=><div className='UserDashBoardProductDiv col-lg-3'><img className='menuPic01' alt='no image' src={obj.image}></img><h4>{obj.product_name}</h4><img className='descriptionImage' src={img4}></img><h3>{obj.price}</h3><button className='btn btn-warning' onClick={()=>{addToCart(obj)}}>add cart</button></div>)
                }
            </div>
        </div>
    </div>
    );
}

export default UserDashBoard;
