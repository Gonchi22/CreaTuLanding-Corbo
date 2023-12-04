import { useState, useEffect } from "react"
import { getProducts } from "../../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (itemId) {
          const products = await getProducts();
          console.log('Productos en ItemDetailContainer:', products);

          const productDetails = products.find(product => product.id === itemId);

          if (productDetails) {
            setProduct(productDetails);
          } else {
            console.log('No hay datos para el ID proporcionado');
          }
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {product ? <ItemDetail product={product} /> : <p>Cargando..</p>}
    </div>
  );
};

export default ItemDetailContainer;


//  const ItemDetailContainer = () => {
//       const [product, setProduct] = useState(null)
    
//       const { itemId } = useParams()

//       useEffect(() => {
//           getProductById(itemId)
//               .then(response => {
//                   setProduct(response)
//               })
//               .catch(error => {
//                   console.error(error)
//               })
//       }, [itemId])

//      return (
//          <div className="ItemDetailContainer">
//              <ItemDetail {...product} />
//          </div>
//      )
//  }

//  export default ItemDetailContainer
