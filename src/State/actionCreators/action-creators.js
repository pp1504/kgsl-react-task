export  const addCart =(product)=>{
    return (dispatch) => {
        dispatch({
            type :"ADD_CART",
            payload : product,
        })
    }
}

export  const increseProductQuantity= (id) =>{
    return (dispatch) => {
        dispatch({
            type :"INCRESE_QUANTITY",
            payload:id,
        })
    }
}

export  const decreseProductQuantity= (id) =>{
    return (dispatch) => {
        dispatch({
            type :"DECRESE_QUANTITY",
            payload:id
        })
    }
}


export  const removeCartItem= (id) =>{
    return (dispatch) => {
        dispatch({
            type :"REMOVE_CART",
            payload:id
        })
    }
}