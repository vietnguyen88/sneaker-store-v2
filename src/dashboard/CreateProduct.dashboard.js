import React, { useState } from 'react'
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap'
import axios from 'axios'

const CreateProduct = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')



    const onSubmit = () => {
        const product = {
            productName: name,
            productDesc: description,
            productPrice: price,
            productUrl: url,
            productCategory: category
        }

        axios.post('http://localhost:4000/products/create', product)
            .then(res => console.log(res.data))
        // console.log(product);


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
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon2">Product Url</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={(e) => setUrl(e.target.value)}
                    aria-label="ProductUrl"
                    aria-describedby="basic-addon2"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon2">Product Category</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" onChange={e => setCategory(e.target.value)}>
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
                    aria-describedby="basic-addon3"
                />
                <InputGroup.Append>
                    <InputGroup.Text>$AUD</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <Button onClick={onSubmit}>Create</Button>
        </Container>
    )
}

export default CreateProduct
