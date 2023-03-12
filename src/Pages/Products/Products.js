import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductItem from '../../Components/ProductItem/ProductItem'

const Products = () => {
    const[products,setProducts] = useState([])
 
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            console.log(response.data);
            setProducts(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])


  return (
    <div style={{width:"100%"}} >
        
       <ProductItem products={products}/>

    </div>
  )
}

export default Products