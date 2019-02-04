import React from 'react';
import {Col, Container, Row} from "reactstrap";
import AccountInfo from "../../components/AccountInfo/AccountInfo";

const Account = (props) => {
    const{login} = props;
    return (

        <Container>
            <Row>
                <Col>
                    <AccountInfo login={login}/>
                </Col>
            </Row>
        </Container>
    )
};
export default Account;