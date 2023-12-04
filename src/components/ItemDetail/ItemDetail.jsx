import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    // Puedes realizar alguna lógica adicional si es necesario
  }, []);

  const handleOnAdd = (quantity) => {
     setQuantityAdded(quantity);

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      quantity: Number(quantity),// ??? 
      category: product.category,
      stock: product.stock,
      description: product.description
    };
   
    addItem(item,quantity);
  };

  return (
    <article className="CardItemDetalle">
      {product ? (
        <>
          <img src={product.img} alt={product.name} className="ItemImg" />
          <section className="section">
            <h2 className="ItemHeader">{product.name}</h2>
            <p className="infoDetalle">Categoria: {product.category}</p>
            <p className="infoDetalle">Descricpión: {product.description}</p>
            <p className="infoDetalle">Precio: {product.price}</p>
            <footer className="ItemFooter">
              {quantityAdded > 0 ? (
                <Link to="/cart" className="Option">
                  Terminar compra
                </Link>
              ) : (
                <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />
              )}
            </footer>
          </section>
        </>
      ) : (
        <p>No hay datos para mostrar</p>
      )}
    </article>
  );
};

export default ItemDetail;



// // el que anda 
// const ItemDetail = ({ product }) => {
//   const [quantityAdded, setQuantityAdded] = useState(0);
//   const { addItem } = useContext(CartContext);

//   useEffect(() => {
//     // Puedes realizar alguna lógica adicional si es necesario
//   }, []);

//   const handleOnAdd = (quantity) => {
//     setQuantityAdded(quantity);

//     const item = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       img: product.img,
//       quantity,
//       category: product.category,
//       stock: product.stock,
//       description: product.description
//     };

//     addItem(item);
//   };

//   return (
//     <article className="CardItemDetalle">
//       {product ? (
//         <>
//           <img src={product.img} alt={product.name} className="ItemImg" />
//           <section className="section">
//             <h2 className="ItemHeader">{product.name}</h2>
//             <p className="infoDetalle">Categoria: {product.category}</p>
//             <p className="infoDetalle">Descricpión: {product.description}</p>
//             <p className="infoDetalle">Precio: {product.price}</p>
//             <footer className="ItemFooter">
//               {quantityAdded > 0 ? (
//                 <Link to="/cart" className="Option">
//                   Terminar compra
//                 </Link>
//               ) : (
//                 <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />
//               )}
//             </footer>
//           </section>
//         </>
//       ) : (
//         <p>No hay datos para mostrar</p>
//       )}
//     </article>
//   );
// };

// export default ItemDetail;



