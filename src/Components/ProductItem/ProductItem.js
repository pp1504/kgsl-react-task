import React from 'react';
import "./ProductItem.css";
import { Rating } from 'react-simple-star-rating';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from '../../State/actionCreators';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
  const { products } =props;
  const dispatch = useDispatch();
  const {addCart} = bindActionCreators(actionCreators,dispatch);

  return (
    <div className='products-container'>
      {products?.length >  0 ?
      <div className='card-wrap'>
      {products.map((product, index) => (
        <div className='card-item' key={index}>
          <div className='card-inner'>
            <div className='card-image'>
              <img src={product.image} width="100%" />
            </div>
            <div className='product-details'>
              <div className='product-category'>{product.category}</div>
              <h4 className='product-title'><a href="">{product.title}</a></h4>
              <div className="product-rating" >
                <Rating 
                initialValue={product.rating.rate} 
                readonly={true} 
                allowFraction={true} 
                size={20}
                />
                 <div>{(product.rating) ? `(${product.rating.count})` : ""}</div>
              </div>

            </div>
            <div className="product-bottom-details">
              <div className="product-price">${product.price}</div>
              <div className="product-links">
                <Link to="/cart" 
                style={{textDecoration:"none"}} 
                onClick={()=>addCart(product)}>
                  Add Cart
                </Link>
              </div>
            </div>


          </div>
        </div>
      ))}
    </div>
    :
    "Loading...."
    }

    </div >
  )
}

export default ProductItem