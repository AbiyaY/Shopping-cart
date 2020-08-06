import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {random, commerce ,lorem} from 'faker';
import {Container,Col,Row,Button } from 'reactstrap';
import CardSection from './CardSection';
import NavBar from './NavBar';


const apiKey = "563492ad6f91700001000001b85afa4af63b41afa431d0ba883cb0f4";
const url = "https://api.pexels.com/v1/search?query=cars&per_page=9&page=1";


const BuyPage = ({addToCart,cartItem}) => {

    const [product, setProduct] = useState([]);


    const fetchProduct = async () => {

        const res = await axios.get(url,{
            headers: {
                Authorization :apiKey
            }
        });

        const { photos } = res.data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            productDesc: lorem.paragraph(),
            id: random.uuid()
        }))

        setProduct(allProduct);
        console.log(allProduct);
        
    };

    useEffect(() => {
        fetchProduct();
    },[]);


return(

    <Container fluid>
        <NavBar />
        <Button className= "button">Go To Cart ({cartItem.length}) </Button>
        <Row>
            {product.map(product =>(
                <Col md={4} key={product.id}>
                    <CardSection product={product} addToCart={addToCart}/>
                </Col>
            ))}
        </Row>

    </Container>
)
   
};

export default BuyPage;