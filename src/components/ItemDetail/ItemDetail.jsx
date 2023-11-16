import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, img, price, category, name, stock, description }) => {
    const [quantityAdded, setquantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handelOnAdd = (quantity) => {
        setquantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article className="CardItemDetalle">
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section className="section">
                <h2 className="ItemHeader">{name}</h2>
                <p className="infoDetalle"><span>Categoria:</span> {category}</p>
                <p className="infoDetalle"><span>Descricpión:</span> {description}</p>
                <p className="infoDetalle"><span>Precio:</span> {price}</p>
                <footer className="ItemFooter">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="Option">Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handelOnAdd} />
                        )
                    }

                </footer>
            </section>
        </article>


    )
}

export default ItemDetail