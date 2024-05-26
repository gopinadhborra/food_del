// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './Navbar.css';
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
const Navbar = ({setShowLogin}) => {
  const[menu,setMenu]=useState("home");
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'> 
       <Link to="/"> <img src={assets.logo}/></Link>
        <ul className="navbar-menu">
          <Link  to='/' onClick={()=>setMenu("home")} className={menu=="home"?"active":""}> home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""} >menu</a>
          <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""} >contact-us</a>  
          <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""}> mobile-app</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon}/>
            <div className="navbar-search_icon">
              <Link to='/card'> <img src={assets.basket_icon}/></Link> 
                <div className={getTotalCartAmount()===0? "":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
        </div>
        
   
  )
}

export default Navbar