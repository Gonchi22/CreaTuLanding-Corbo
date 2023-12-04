import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import { db } from '../../main';
import { collection, addDoc } from 'firebase/firestore';
import './Cart.css';

const Cart = () => {
  const { cart: cartItems, removeItem, clearCart } = useContext(CartContext);
  console.log('Datos del carrito:', cartItems);

  // Función para calcular el precio total de la compra
  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const sendOrderToFirebase = async () => {
    const orders = {
      productos: cartItems,
      total: calculateTotalPrice(),
      fecha: new Date().toString(), // Agrega la fecha actual

    };

    const ordersRef = collection(db, 'orders');

    try {
      await addDoc(ordersRef, orders);
      console.log('Pedido enviado con éxito a Firebase');
      clearCart()// borra el carrito 
    } catch (error) {
      console.error('Error al enviar el pedido a Firebase: ', error);
    }
  };


  return (
    <div className='cart-container'>

      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>No hay ítems en el carrito.</p>
          <Link to="/">Volver al inicio</Link>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (

            <div key={item.id} className='cart-item'>
              <img src={item.img} alt={item.title} />
              <div className='item-details'>
                <p>{item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio unitario: ${item.price}</p>
                <button onClick={() => removeItem(item.id)}>
                  Eliminar ítem
                </button>

              </div>
            </div>
          ))}
          <div className='total-price'>
            <p>Total: ${calculateTotalPrice()}</p>
            <button  onClick={sendOrderToFirebase} className='butonCompraFinal'>
              <Link to="/checkout"  className="linkNoEstilos"> Finalizar Compra</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart
