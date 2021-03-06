import React, { useState, useEffect } from 'react'
import { Container, CardGroup } from 'react-bootstrap'
import axios from 'axios'
import Product from './Product'
import { Link } from 'react-router-dom'


const ProductsList = ({ title }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://sneaker-store-v2-api.herokuapp.com/products')
            .then(res => {
                if (res.data.length > 0) {
                    setProducts(res.data)
                }
            })
            .catch(err => console.log(err)
            )
    }, [])
    return (
        <Container className='text-center p-5'>
            <h4> {title}</h4>
            <CardGroup >
                {
                    products.map(product => {
                        return (
                            <Link key={product._id} to={"/product/" + product._id}>
                                <Product product={product} />
                            </Link>
                        )
                    })
                }
            </CardGroup>
        </Container>
    )
}

export default ProductsList
