import React from 'react';

import './Register.css';
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {Col, Container, Row} from "reactstrap";

const Register = () => {

        return (
            <Container>
                <Row>
                    <Col sm="12">
                        <RegisterForm/>
                    </Col>
                </Row>
            </Container>
        )
};

export default Register;