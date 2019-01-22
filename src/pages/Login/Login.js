import React from 'react';
import './Login.css';
import {Row} from "reactstrap";
import Col from "react-bootstrap/es/Col";
import Container from "reactstrap/es/Container";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {

    return (
        <Container>
            <Row>
                <Col md="4"> </Col>
                <Col sm="12" md="4">
                    <LoginForm/>
                </Col>
                <Col md="4"> </Col>
            </Row>
        </Container>
    )
};
export default Login;