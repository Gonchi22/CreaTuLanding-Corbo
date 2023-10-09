import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Plantas</h3>
            <div>
                <button>Inicio</button>
                <button>Nuestras Plantas </button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar