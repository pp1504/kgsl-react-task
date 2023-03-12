import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./AppBar.css";



const AppBar = () => {
  const carts = useSelector((state)=>state.cart);

  return (
    <div >
      <div className="navbar">
      <li style={{float:'left'}} >
       <Link className="nav-link" to="/">MYSHOP</Link>
      </li>

      <li style={{float:'right'}} >
          <Link className="nav-link" to="/cart">Cart : 
          <span className='cart-badge'>
           {carts.cartNumber}
            </span></Link>
        </li>
        <li style={{float:'right'}} >
          <Link className="nav-link" to="/products">Products</Link>
        </li>
       
      </div>
    </div>
  )
}

export default AppBar