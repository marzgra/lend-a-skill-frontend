import React from 'react';
import {Col, Container, Row} from "reactstrap";
import AccountInfo from "../../components/AccountInfo/AccountInfo";

const Account = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <AccountInfo/>
                    <CommentsList/>
                </Col>
            </Row>
        </Container>
    )
};
export default Account;