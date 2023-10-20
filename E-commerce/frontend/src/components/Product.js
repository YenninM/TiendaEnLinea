import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

function Product(props){
    const {product}= props;
    const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

   const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Lo sentimos. Producto no disponible');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
    return(
      <div className="d-flex flex-wrap">
      <div className="col-10 mb-2">
    <Card >
    <Link to={`/product/${product.slug}`}>
      <img src={product.image} className="card-img-top" alt={product.name} style={{height: 250}} />
    </Link>
    <Card.Body>
    <Link to={`/product/${product.slug}`}>
        <Card.Title>{product.name}</Card.Title>
      </Link>
      <Rating rating={product.rating} numReviews={product.numReviews} />
      <Card.Text>${product.price}</Card.Text>
      {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            No Disponible
          </Button>
        ) : (
          <Button className="custom-button" onClick={() => addToCartHandler(product)}>Contactar</Button>
        )}
    </Card.Body>
  </Card>
  </div>
  </div>
  );
}
export default Product;