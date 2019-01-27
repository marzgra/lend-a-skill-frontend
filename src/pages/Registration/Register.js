import React from 'react';

import './Register.css';
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {Col, Container, Row} from "reactstrap";

const Register = () => {

        return (
            <Container>
                <Row>
                    <Col md="4"> </Col>
                    <Col sm="12" md="4">
                        <RegisterForm/>
                    </Col>
                    <Col md="4"> </Col>
                </Row>
            </Container>
        )
};

export default Register;