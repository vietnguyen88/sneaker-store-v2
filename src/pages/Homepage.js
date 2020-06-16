import React from 'react'
import { Container, Carousel, ResponsiveEmbed, Form, FormControl, Button } from 'react-bootstrap'
import ProductList from '../components/ProductsList'

const Homepage = () => {


    return (
        <Container fluid>
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100 rounded-lg"
                        src={require('../img/slide1.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-lg"
                        src={require('../img/slide2.jpg')}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-lg"
                        src={require('../img/slide3.jpg')}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-lg"
                        src={require('../img/slide4.jpg')}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <ProductList title='Sneaker List' />
            <Container>
                <ResponsiveEmbed aspectRatio="16by9">
                    <video autoPlay loop playsInline>
                        <source src={require('../pic-shoes/video.mp4')} type="video/mp4" />
                           Your browser does not support the video tag.
                    </video>
                </ResponsiveEmbed>
            </Container>
            <Container fluid style={{ backgroundColor: '#ede734' }}>
                <Container className='py-5 mt-5 d-flex justify-content-between'>
                    <h1>Sign up to get 50% off storewide</h1>
                    <Form inline>
                        <FormControl type="text" placeholder="Sign Up" className="mr-sm-2" />
                        <Button variant="outline-primary">Sign Up</Button>
                    </Form>
                </Container>
            </Container>
        </Container>
    )
}

export default Homepage
