// // src/context/CartContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';

// // Cria o contexto
// const CartContext = createContext();

// // Cria um hook para acessar o contexto
// export const useCart = () => {
//   return useContext(CartContext);
// };

// // Provedor do contexto
// export const CartProvider = ({ children }) => {
  
//   // Inicializa o estado do carrinho com os itens salvos no localStorage
//   const [cartItems, setCartItems] = useState(() => {
//     const savedCartItems = localStorage.getItem('cartItems');
//     return savedCartItems ? JSON.parse(savedCartItems) : [];
//   });

//   // Salva o estado do carrinho no localStorage sempre que ele for atualizado
//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Adiciona um produto ao carrinho ou incrementa a quantidade se já existir
//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevItems, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   // Remove um produto completamente do carrinho
//   const removeFromCart = (productId) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
//   };

//   // Incrementa a quantidade de um produto específico
//   const incrementQuantity = (productId) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   // Decrementa a quantidade de um produto específico
//   const decrementQuantity = (productId) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === productId
//           ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//           : item
//       )
//     );
//   };

//   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity, cartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
