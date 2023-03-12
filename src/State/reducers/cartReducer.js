const initialState = {
    cartNumber: 0,
    cartItems: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            if (state.cartNumber == 0) {
                let cartItem = {
                    id: action.payload.id,
                    productTitle: action.payload.title,
                    productImage: action.payload.image,
                    productQuantity: 1,
                    productPrice: action.payload.price
                }
                state.cartItems.push(cartItem);
            }
            else {
                let isExist = false;
                state.cartItems.map((cartItem, index) => {
                    if (cartItem.id == action.payload.id) {
                        state.cartItems[index].productQuantity++;
                        isExist = true;
                    }
                })

                if (!isExist) {
                    let newCartItem = {
                        id: action.payload.id,
                        productTitle: action.payload.title,
                        productImage: action.payload.image,
                        productQuantity: 1,
                        productPrice: action.payload.price
                    }
                    state.cartItems.push(newCartItem);
                }

            }

            return { ...state, cartNumber: state.cartNumber + 1 }



        case "INCRESE_QUANTITY":
            state.cartNumber++;
            state.cartItems[action.payload].productQuantity++;

            return { ...state };

        case "DECRESE_QUANTITY":
            state.cartNumber--;
            if (state.cartItems[action.payload].productQuantity > 1) {
                state.cartItems[action.payload].productQuantity--;
            }
            return { ...state }


        case "REMOVE_CART":

            return {
                ...state,
                cartNumber: state.cartNumber - state.cartItems[action.payload].productQuantity,
                cartItems: state.cartItems.filter((item) => {
                    return item.id != state.cartItems[action.payload].id
                }
                )
            }


        default:
            return state;


    }
}

export default reducer;