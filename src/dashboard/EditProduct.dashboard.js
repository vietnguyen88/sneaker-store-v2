import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap'
import axios from 'axios'


const EditProduct = () => {
    const { id } = useParams();
    // const [product, setProduct] = useState({})

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        const fetchProduct = () => {
            axios.get('https://sneaker-store-v2-api.herokuapp.com/products/' + id)
                .then(res => {
                    if (res.data !== null) {
                        setName(res.data.productName)
                        setDescription(res.data.productDesc)
                        setPrice(res.data.productPrice)
                        setUrl(res.data.productUrl)
                        setCategory(res.data.productCategory)
                    }
                })
                .catch(err => console.log(err)
                )
        };

        fetchProduct();
    }, [id])


    const onSubmit = () => {
        const product = {
            productName: name,
            productDesc: description,
            productPrice: price,
            productUrl: url,
            productCategory: category
        }

        axios.post('https://sneaker-store-v2-api.herokuapp.com/products/update/' + id, product)
            .then(res => console.log(res.data))

        window.location = '/dashboard/'
    }

    return (

        <Container >
            <InputGroup className="mb-3 mt-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Product Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={(e) => setName(e.target.value)}
                    aria-label="ProductName"
                    aria-describedby="basic-addon1"
                    value={name}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon2">Product Description</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={(e) => setDescription(e.target.value)}
                    aria-label="ProductDescription"
                    aria-describedby="basic-addon2"
                    value={description}

                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon2">Product Url</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={(e) => setUrl(e.target.value)}
                    aria-label="ProductUrl"
                    aria-describedby="basic-addon3"
                    value={url}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon2">Product Category</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" value={category} onChange={e => setCategory(e.target.value)}>
                    <option>Choose...</option>
                    <option>men</option>
                    <option>women</option>
                </FormControl>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">Product Price</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={(e) => setPrice(e.target.value)}
                    aria-label="ProductPrice"
                    aria-describedby="basic-addon4"
                    value={price}

                />
                <InputGroup.Append>
                    <InputGroup.Text>$AUD</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <Button onClick={onSubmit} >Update</Button>
        </Container>
    )
}

export default EditProduct
