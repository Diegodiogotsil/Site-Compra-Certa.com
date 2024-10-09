import CartActionTypes from "./action-types";

const initialState = {
    produtos: [],
    precoTotaldosProdutos: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUTO:
            return {
                ...state,
                produtos: [...state.produtos, { ...action.payload, quantity: 1 }]
            };
        case CartActionTypes.REMOVE_PRODUTO:
            return {
                ...state,
                produtos: state.produtos.filter(produto => produto.id !== action.payload)
            };
        case CartActionTypes.INCREMENT_QUANTITY:
            return {
                ...state,
                produtos: state.produtos.map(produto =>
                    produto.id === action.payload ? { ...produto, quantity: produto.quantity + 1 } : produto
                )
            };
        case CartActionTypes.DECREMENT_QUANTITY:
            return {
                ...state,
                produtos: state.produtos.map(produto =>
                    produto.id === action.payload && produto.quantity > 1
                        ? { ...produto, quantity: produto.quantity - 1 }
                        : produto
                )
            };
        default:
            return state;
    }
};

export default cartReducer;
