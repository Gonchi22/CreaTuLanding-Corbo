import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img, price, stock}) => {
    return(
        <article className="CardItem"> 
            <picture>
                <img src={img} alt={name} className="Itemimg" />
            </picture>
            <div className="InfoItem">
                <h2 className="ItemHeader">{name}</h2>
                <p className="Info">${price}</p>
                <p className="StockCircle">{stock}</p>
            </div>
            <footer className="ItemFooter">
            <Link to={`/item/${id}`}  className="Option">Ver detalles</Link>
            </footer>
        </article>
    )
}

export default Item