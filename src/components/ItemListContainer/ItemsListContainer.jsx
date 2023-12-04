import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../../asyncMock"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts(); // Utiliza getProducts en lugar de fetchProducts
      setProducts(productsData);
    };

    fetchData();
  }, [itemId]);
  

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;





// const ItemListContainer = ({ greeting }) => {
//   const [products, setProducts] = useState([])

//   const { categoryId } = useParams()

//   useEffect(() => {
//     const asyncFunc = categoryId ? getProductsByCategory : getProducts
//     asyncFunc(categoryId)
//       .then(response => {
//         setProducts(response)
//       })
//       .catch(error => {
//         console.error(error)
//       })
//   }, [categoryId])

//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <ItemList products={products} />
//     </div>
//   )
// }


// export default ItemListContainer