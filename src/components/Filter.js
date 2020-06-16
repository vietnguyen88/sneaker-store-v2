import React from 'react'
import { Container } from 'react-bootstrap'

const Filter = ({ gender }) => {
    return (
        <Container className='mt-5'>
            {gender}
        </Container>
    )
}

export default Filter
