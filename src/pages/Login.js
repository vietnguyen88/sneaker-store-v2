import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }
        axios.post('/users/login', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }


    return (
        <Container className='mt-5 w-50'>
            <h1>Login</h1>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>User name</Form.Label>
                    <Form.Control onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Enter username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        Do not share your password with anyone else.
    </Form.Text>
                </Form.Group>

                <Button onClick={onSubmit} variant="primary" type="submit">
                    Submit
  </Button>
                <Form.Group className='mt-2'>
                    <Form.Label>OR</Form.Label><br />
                    <Link to='/register'>Register</Link>
                </Form.Group>
            </Form>


        </Container >
    )
}

export default Login
