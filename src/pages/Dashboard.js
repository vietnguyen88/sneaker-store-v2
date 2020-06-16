import React from 'react'
import { Container } from 'react-bootstrap'
import ListProduct from '../dashboard/ListProduct.dashboard'
import CreateProduct from '../dashboard/CreateProduct.dashboard'

import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom'
import EditProduct from '../dashboard/EditProduct.dashboard'

const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <Container className='text-center mt-5'>
            <Router>
                <h2>Dashboard</h2>
                <Link className='btn-primary btn mx-1' to={`${url}`} >All Products</Link>
                <Link className='btn-primary btn mx-1' to={`${path}/create`} >Create Product</Link>
                <Switch>
                    <Route exact path={path} component={ListProduct} />
                    <Route path={`${path}/create`} component={CreateProduct} />
                    <Route path={`${path}/edit/:id`} component={EditProduct} />
                </Switch>
            </Router>
        </Container>
    )
}

export default Dashboard
