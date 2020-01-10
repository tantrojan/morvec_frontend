import React, { Component } from 'react';
import {Container, Row, Col, Form, Button, FormGroup} from 'react-bootstrap';
import './auth.css';

class Login extends Component {
    render() {
        return (
            <div className='login_page justify-content-center'>
                <Row className="login_card justify-content-md-center">
                    <Col md="auto">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            {/* <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                            <FormGroup controlId="frombasicSubmit">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </FormGroup>

                            <Form.Group controlId="googleLogin" className='justify-content-center'>
                            <Button className='google_button'>
                                <img src='./buttons/btn_google_signin_light_normal_web.png'/>
                            </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;