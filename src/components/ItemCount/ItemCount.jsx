import { useState } from "react"
import React from "react"
import './ItemCount.css'


const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const incrementCount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="contenedor" >
            <div className="controles">
                <button className="button" onClick={decrementCount}>-</button>
                <h4 className="number">{count}</h4>
                <button className="button" onClick={incrementCount}>+</button>
            </div>
            <div>
                <button className="button-carrito" onClick={() => onAdd(count)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>

    )
}
export default ItemCount;
//  const ItemCount = ({ stock, initial, onAdd }) => {
//      const [count, setCount] = useState(initial);

//      const incrementCount = () => {
//          if (count < stock) {
//              setCount(count + 1);
//          }
//      };

//      const decrementCount = () => {
//          if (count > 1) {
//              setCount(count - 1);
//          }
//      };

//      return (
//          <div className="contenedor" >
//              <div className="controles">
//                  <button className="button" onClick={decrementCount}>-</button>
//                  <h4 className="number">{count}</h4>
//                  <button className="button" onClick={incrementCount}>+</button>
//              </div>
//              <div>
//                  <button className="button-carrito" onClick={() => onAdd(count)} disabled={!stock}>Agregar al carrito</button>
//              </div>
//          </div>

//      )
//  }

//  export default ItemCount