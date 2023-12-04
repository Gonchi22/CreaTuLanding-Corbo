
import Item from "../Item/Item"
import { useEffect, useState } from "react";
import './ItemList.css'
import { getProducts } from "../../../asyncMock"


const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts(); // Utiliza getProducts en lugar de fetchProducts
      console.log("Productos en ItemList:", productsData);
      setProducts(productsData);
    };

    fetchData();
  }, []);

  return (
    <div className="ListaGrupos">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;







  // const ItemList = ({products}) => {     
  //   return(
  //         <div className="ListaGrupos">
  //             {products.map(prod => <Item key={prod.id} {...prod} />)}
  //         </div>
  //     )
  // }

  //  export default ItemList


 