import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// importing components
import Home from './components/Home';
import Login from './components/Login';
import SignIn from './components/SignIn';
import SignInStu from './components/SignInProcess/SignInStu';
import SignInFac from './components/SignInProcess/SignInFac';
import SignInCanteen from './components/SignInProcess/SignInCanteen';
import UserDashBoard from './components/Products/Canteen/UserDashBoard/UserDashBoard';
import Cart from './components/Products/Canteen/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<Login/>
    },
    {
      path:'Home',
      element:<Home/>
    },
    {
      path:'Login',
      element:<Login/>
    },
    {
      path:'SignIn',
      element:<SignIn/>
    },
    {
      path:'SignInStu',
      element:<SignInStu/>
    },
    {
      path:'SignInFac',
      element:<SignInFac/>
    },
    {
      path:'SignInCanteen',
      element:<SignInCanteen/>
    },
    {
      path:'UserDash',
      element:<UserDashBoard/>
    },
    {
      path:"Cart",
      element:<Cart/>
    }
  ])
  return (
    <div className="App">
      <div className='Header'>
        <Header/>
      </div>
      <div className='Bodya'>
        <RouterProvider router={router}/>
      </div>
      <div className='Footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
