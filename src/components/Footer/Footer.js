import React from 'react';
import {Col, Container, Row} from "reactstrap";
import './Footer.css';

const Footer = () => {

    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <div className="wrapper">
                        <div className="links">
                            <ul>
                                <li><a href="/">Strona główna</a></li>
                                <li><a href="/login">Logowanie</a></li>
                                <li><a href="/register">Rejestracja</a></li>
                                <li><a href="#opinions">Opinie</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="copyrights">
                        <h6>© 2018 Copyright Grazyna Marzec</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    )

};

export default Footer;