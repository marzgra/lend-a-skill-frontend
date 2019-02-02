import React from 'react';
import {Col, Container, Row} from "reactstrap";
import PasswordResetComponent from "../../components/PasswordResetComponent/PasswordResetComponent";

const PasswordReset = () => {

    return (
        <Container>
            <Row>
                <Col md="4"> </Col>
                <Col sm="12" md="4">
                    <PasswordResetComponent />
                </Col>
                <Col md="4"> </Col>
            </Row>
        </Container>
    )
};
export default PasswordReset;