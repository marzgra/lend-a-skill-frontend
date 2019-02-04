import React from 'react';
import Container from "reactstrap/es/Container";
import {Col, Row} from "reactstrap";
import ConversationsList from "../../components/ConversationsList/ConversationsList";

const MessagePage = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <ConversationsList/>
                </Col>
                <Col>
                    <MessageWindow/>
                </Col>
            </Row>
        </Container>

    );
};

export default MessagePage;