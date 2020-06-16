import React, { useState, useContext } from 'react'
import { GrClose, GrMenu, GrCart } from "react-icons/gr";
import CartContext from './CartContext'
import { Container, Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const [cart] = useContext(CartContext)
    const [open, setOpen] = useState(false)

    return (
        <Container fluid>
            <Navbar bg='lg' expand='lg'>
                <NavbarBrand href='/'>Sneaker Store</NavbarBrand>
                <NavbarToggle onClick={() => setOpen(!open)} aria-controls='gender'>
                    {open ? <GrClose /> : <GrMenu />}
                </NavbarToggle>
                <NavbarCollapse id='gender' className='justify-content-between'>
                    <Nav>
                        <Link className='mx-lg-1' to='/men'>Men</Link>
                        <Link className='mx-lg-1' to='/women'>Women</Link>
                    </Nav>
                    {/* <Form inline >
                        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                        <Button variant='outline-success' >Search</Button>
                    </Form> */}
                    <Nav>
                        <Link className='mx-lg-1' to='/login'>Log In</Link>
                        <Link className='mx-lg-1' to='/dashboard'>Dashboard</Link>
                        <Link className='mx-lg-1' to='/cart'>  <GrCart className='cart' style={{ marginTop: '-8px', fontSize: '1.3rem' }} />({cart.length})</Link>
                    </Nav>
                </NavbarCollapse>

            </Navbar>
        </Container>
    )
}

export default Navigation
