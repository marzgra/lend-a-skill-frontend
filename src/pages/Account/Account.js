import React from 'react';
import {Col, Container, Row} from "reactstrap";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import CommentsList from "../../components/CommentsList/CommentsList";
import AddComment from "../../components/AddComment/AddComment";

const Account = (props) => {
    const{login} = props;
    return (

        <Container>
            <Row>
                <Col>
                    <AccountInfo login={login}/>
                    <AddComment login={login}/>
                    <CommentsList login={login}/>
                </Col>
            </Row>
        </Container>
    )
};
export default Account;