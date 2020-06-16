import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
    return (
        <Card>
            {product.productUrl ?
                <Card.Img variant="top" src={require(`../pic-shoes/${product.productUrl}`)} />
                :
                <div>no image</div>

            }
            <Card.Body>
                <Card.Title className='text-uppercase'>{product.productName}</Card.Title>
                <Card.Title className='text-uppercase'>${product.productPrice}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Product
