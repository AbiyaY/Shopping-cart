import React from 'react';

import {
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
    Button
} from 'reactstrap';

const CardSection = ({product,addToCart,}) => {
    return(
        <Card className="mt-4 mb-1">
            <CardImg 
            top
            height="250"
            width="100%"
            src={product.smallImage}
            />
            <CardBody className="text-center"  >
                <CardTitle> <span className="text-danger"> {product.productName}</span></CardTitle>
                <CardText className="secondary" >
                    <span className="text-danger">Price: </span>£ {product.productPrice} 
                </CardText>
                <CardText >
                   <span className="text-danger">Description: </span> {product.productDesc}
                </CardText>
                <Button
                color="primary"
                onClick = {()=> addToCart(product)}
                >
                    Add to Cart
                </Button>
            </CardBody>
        </Card>

    );
};

export default CardSection;