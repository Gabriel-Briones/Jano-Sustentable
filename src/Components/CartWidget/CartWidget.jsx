export const CartWidget = ({ cantCarrito }) => {
    return (
        <>
            <button className="btn btn-secondary">Carrito</button>
            <p>{cantCarrito}</p>
        </>
    );
};
