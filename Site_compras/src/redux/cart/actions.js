import CartActionTypes from "./action-types";

export const addprodutoaoCarrinho = (payload) => ({
    type: CartActionTypes.ADD_PRODUTO,
    payload,
});

export const removeFromCart = (id) => ({
    type: CartActionTypes.REMOVE_PRODUTO,
    payload: id,
});

export const incrementQuantity = (id) => ({
    type: CartActionTypes.INCREMENT_QUANTITY,
    payload: id,
});

export const decrementQuantity = (id) => ({
    type: CartActionTypes.DECREMENT_QUANTITY,
    payload: id,
});
