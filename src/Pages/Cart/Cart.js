import React from 'react';
import "./Cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State/actionCreators';

const Cart = () => {

  const carts = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const { increseProductQuantity, decreseProductQuantity ,removeCartItem} = bindActionCreators(actionCreators, dispatch);

  let sum = 0;

  carts.cartItems.forEach(element => {
    sum += (element.productPrice*element.productQuantity);
  });


  return (

    <div >
     {carts.cartItems.length > 0 ?
     <div className='cart-container'>
       <div  className='cart-table-wrapper' style={{overflowX:"auto"}}>
      <table className="cart-table" >
        <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th style={{textAlign:'right'}}>Total</th>
         <th>D</th>
        </tr>
        </thead>
       
        <tbody>
          {carts.cartItems.map((item,index)=>(
            <tr key={index}>
                <td>
                  <div style={{width:"100%"}} className="cart-item-image">
                  <img src={item.productImage} alt="" width="100" />
                  </div>
                 
                  </td>
                <td>{item.productTitle}</td>
                <td>${(item.productPrice).toFixed(2)}</td>
                <td>
                  <div className='item-quantity'>
                    {item.productQuantity > 1 ?
                    <div className='quantity-button' onClick={()=>decreseProductQuantity(index)}>-</div>
                     :
                     <div className='quantity-button' >-</div>
                     }
                 
                  <div style={{padding:"10px"}}>{item.productQuantity}</div>
                  <div className='quantity-button' onClick={()=>increseProductQuantity(index)}>+</div>
                  </div>
                  
                </td>
                <td style={{textAlign:'right'}}>${(item.productPrice*item.productQuantity).toFixed(2)}</td>
                <td className='remove-button' onClick={()=>removeCartItem(index)}>X</td>
            </tr>
          ))}
        </tbody>
       
      </table>
      </div>

      <div className='cart-summary-container'>
            <div className='cart-summary-wrapper'>
              <div className='cart-summary-heading'>Summary</div>
              <hr />
              <table className='cart-summary-table'>
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td style={{textAlign:'right'}}>${(sum).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td style={{textAlign:'right'}}>Free</td>
                  </tr>
                </tbody>
              
                <tfoot>
               
                  <tr>
                    <td>Total Price</td>
                    <td style={{textAlign:'right'}}>${(sum).toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>

              <div className='checkout-button'>Checkout</div>
              
            </div>
           
      </div>

     </div>:
     
     <div style={{padding:"2rem",textAlign:'center',fontSize:'20px'}}>
      <div>No Products in cart</div>
      </div>
    }
    
    </div>
  )
}

export default Cart