import React,{useState} from 'react';

import {Container, Row, Col} from 'reactstrap';
import { ToastContainer, toast} from 'react-toastify';

import BuyPage from './BuyPage';
import CartSection from './CartSection';




const Home = () => {
    const [cartItem, setCartItem] = useState([]);


  const addToCart = item => {

    const isAdded = cartItem.findIndex(function(array){
      return array.id === item.id
    })

    if(isAdded !== -1) {
      toast ("Already added to cart",{
        type: "error"
      })
      return;
    }

    setCartItem([...cartItem, item]);

  };


  const buyNow = () => {
    setCartItem([]);

    toast ("Purchased Complete",{
      type: "success"
    });
  };


  const removeFromCart = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !==item.id))

    toast("Removed From Cart",{
      type:"warning"
    })
  };


    return (

        <Container fluid>     

        <ToastContainer />
          <Row>
            <Col md="8">
              <BuyPage addToCart={addToCart} cartItem={cartItem} />
            </Col>
            <Col md="4">
              <CartSection cartItem={cartItem} removeFromCart={removeFromCart} buyNow={buyNow} />
            </Col>
          </Row>
          
        </Container>
    );
};

export default Home;