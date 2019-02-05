import React from 'react';
import Container from "reactstrap/es/Container";
import {Col, Row} from "reactstrap";
import ConversationsList from "../../components/ConversationsList/ConversationsList";
import MessageWindow from "../../components/MessageWindow/MessageWindow";

const MessagePage = (props) => {
    const{login} = props;

    return(
        <Container>
            <Row>
                <Col md="4">
                    <h5>Twoje rozmowy</h5>
                    <ConversationsList/>
                </Col>
                <Col>
                    <MessageWindow login={login}/>
                </Col>
            </Row>
        </Container>

    );
};

export default MessagePage;