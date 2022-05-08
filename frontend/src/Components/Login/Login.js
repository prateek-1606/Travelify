import { Button } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {

    const [data, SetData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        SetData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Container fluid>
                <Row className="crow" >
                    <Col>
                        <div className="border-dark form-block" >
                            <Form onSubmit={handleSubmit} >
                                <h2 className="mb-1 title">Welcome Back!</h2>
                                <text style={{ fontWeight: '400', color: 'gray' }} >Please enter your details to login!</text>
                                <Form.Group style={{ marginTop: '40px' }} >
                                    <Form.Label style={{ fontWeight: '500' }}>Email Address</Form.Label>
                                    <Form.Control onChange={handleChange} name='email' type="email" placeholder="myemail.address.com" />
                                </Form.Group>
                                <Form.Group style={{ marginTop: '20px', marginBottom: '40px' }} >
                                    <Form.Label style={{ fontWeight: '500' }}>Password</Form.Label>
                                    <Form.Control onChange={handleChange} name='password' type="password" placeholder="**********" />
                                </Form.Group>
                                <div className="d-grid">
                                    <Button type="submit" className="custom-btn" >Signin</Button>
                                </div>
                                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                    <text>Don't have an account?</text>
                                    <Link to="/register" >Register</Link>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col className="column-2" >Col 2</Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;