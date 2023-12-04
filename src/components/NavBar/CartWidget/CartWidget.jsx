import cart from './assets/cart.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import './CartWidget.css'




  const CartWidget = () => {
      const { cart: cartItems } = useContext(CartContext);
      console.log('Datos del carrito en CartWidget:', cartItems);
     
      // Calcula la cantidad total de ítems en el carrito
     const totalItems = cartItems.reduce((acc, item) => acc + (Number(item.quantity) ?? 0), 0);
      console.log('Valor de totalItems:', totalItems);
      // Si no hay ítems en el carrito, retorna null para no renderizar nada
      if (totalItems === 0) {
          return (
              <Link to="/cart" className='container empty-cart'>
                  <img src={cart} alt="cart-widget" />
              </Link>
          );
      }

      return (
          <Link to="/cart" className='container'>
              <img src={cart} alt="cart-widget" />
              <span>{totalItems}</span>
          </Link>
      );
  }
  export default CartWidget