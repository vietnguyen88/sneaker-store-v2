import React, { useState, useEffect } from 'react'
import { Button, Table, ButtonGroup } from 'react-bootstrap'
import axios from 'axios'
import { useRouteMatch, Link } from 'react-router-dom'

const ListProduct = () => {

    const { path } = useRouteMatch();
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/products')
            .then(res => {
                if (res.data.length > 0) {
                    setProducts(res.data)
                }
            })
            .catch(err => console.log(err)
            )
    }, [])


    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/products/delete/' + id)
            .then(res => console.log(res.data));
        setProducts(products.filter(product => product._id !== id))
    }
    return (
        <Table className='my-5' striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => {
                        return (
                            <tr key={product._id}>
                                <td>{product.productName}</td>
                                <td>{product.productDesc}</td>
                                <td>{product.productPrice}</td>
                                <td>
                                    <ButtonGroup aria-label="actions">
                                        <Link className='btn btn-primary' to={`${path}/edit/${product._id}`} >Edit</Link>
                                        <Button onClick={() => handleDelete(product._id)} variant="primary">Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>

                        )
                    })
                }


            </tbody>
        </Table>
    )
}

export default ListProduct
