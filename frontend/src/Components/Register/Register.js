import { Button } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { register } from '../../api/auth';

const Register = () => {

    const [data, SetData] = useState({ name: '', email: '', password: '', contact: '' });
    const history = useNavigate();

    const handleChange = (e) => {
        SetData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        register(data)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify({ ...res?.data }));
                console.log(res);
                history('/dashboard');
            })
            .catch((e) => console.log(e));
    }

    return (
        <>
            <Container fluid>
                <Row className="crow" >
                    <Col>
                        <div className="border-dark register-form-block" >
                            <Form onSubmit={handleSubmit} >
                                <h2 className="mb-1 title">Register Now!</h2>
                                <text style={{ fontWeight: '400', color: 'gray' }} >Please enter your details to register!</text>
                                <Form.Group style={{ marginTop: '30px' }} >
                                    <Form.Label style={{ fontWeight: '500' }}>Name</Form.Label>
                                    <Form.Control onChange={handleChange} name="name" type="text" placeholder="Prateek Varshney" />
                                </Form.Group>
                                <Form.Group style={{ marginTop: '20px' }} >
                                    <Form.Label style={{ fontWeight: '500' }}>Email Address</Form.Label>
                                    <Form.Control onChange={handleChange} name="email" type="email" placeholder="myemail.address.com" />
                                </Form.Group>
                                <Form.Group style={{ marginTop: '20px' }} >
                                    <Form.Label style={{ fontWeight: '500' }}>Contact No</Form.Label>
                                    <Form.Control onChange={handleChange} name="contact" type="text" placeholder="9548******" />
                                </Form.Group>
                                <Form.Group style={{ marginTop: '20px', marginBottom: '30px' }} >
                                    <Form.Label style={{ fontWeight: '500' }}>Password</Form.Label>
                                    <Form.Control onChange={handleChange} name="password" type="password" placeholder="**********" />
                                </Form.Group>
                                <div className="d-grid">
                                    <Button type="submit" className="custom-btn" >Register</Button>
                                </div>
                                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                    <text>Already have an account?</text>
                                    <Link to="/login" >Login</Link>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col className="column-2" >
                        <div style={{ marginLeft: "10%" }} >
                            <h1 style={{ fontFamily: 'Playfair', color: 'white', textAlign: 'center', fontSize: '44px' }} >Travelify</h1>
                            <p style={{ fontFamily: 'serif', color: 'white', textAlign: 'center', fontSize: '28px' }} >Find your right travelling partner</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register;