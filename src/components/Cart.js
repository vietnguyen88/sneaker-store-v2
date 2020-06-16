import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import CartContext from './CartContext'
import { Container, Table } from 'react-bootstrap';

const Cart = () => {
    const [cart] = useContext(CartContext)
    return (
        <Container className='mt-5'>
            <Table className='my-5' striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length === 0 ?
                        <tr>
                            <td colSpan='4'>Empty Cart</td>
                        </tr>
                        :
                        cart.map(product => {
                            return (
                                <tr key={product.productId} >
                                    <td>{product.productName}</td>
                                    <td>{product.productPrice}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.productPrice * product.quantity}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </Container>
    )
}

export default Cart
