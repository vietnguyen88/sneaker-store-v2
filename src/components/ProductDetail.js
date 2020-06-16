import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import CartContext from './CartContext'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'

const ProductDetail = () => {
    const { id } = useParams();
    const [cart, setCart] = useContext(CartContext)
    const [product, setProduct] = useState({
        productId: '',
        productName: '',
        productDesc: '',
        productPrice: '',
        productUrl: 'shoe1.jpg'
    })

    useEffect(() => {
        axios.get('https://sneaker-store-v2-api.herokuapp.com/products/' + id)
            .then(res => {
                if (res.data !== null) {
                    setProduct({
                        productId: res.data._id,
                        productName: res.data.productName,
                        productDesc: res.data.productDesc,
                        productPrice: res.data.productPrice,
                        productUrl: res.data.productUrl
                    })
                }
            })
            .catch(err => console.log(err)
            )


    }, [id])

    const onSubmit = (e) => {
        e.preventDefault()
        const found = cart.find(product => product.productId === id)
        if (found) {
            found.quantity++;
        }
        else {
            product.quantity = 1;
            setCart([...cart, product])
        }


    }

    return (
        <Container className='mt-5 '>
            <Row>
                <Col>
                    <Image className='w-75 border rounded' src={require(`../pic-shoes/${product.productUrl}`)} />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Link to='/'>&lt;Back</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className='text-uppercase'>
                                {product.productName}
                            </h1>
                        </Col>
                    </Row>
                    <Row className='my-3'>
                        <Col>
                            <h6 className='text-uppercase'>
                                {product.productDesc}
                            </h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6 className='font-weight-bold'>
                                ${product.productPrice}
                            </h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={onSubmit} className='text-uppercase font-weight-bold'>Add to Cart</Button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail
