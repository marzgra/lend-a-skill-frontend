import React from 'react';
import MyCarousel from '../../components/Carousel/MyCarousel';
import Container from "reactstrap/es/Container";
import {Col, Row} from "reactstrap";
import MyCard from "../../components/Card/MyCard";

import './MainPage.css';

import avatar1 from '../../images/avatars/avatar (1).jpg';
import avatar2 from '../../images/avatars/avatar (2).jpg';
import avatar3 from '../../images/avatars/avatar (3).jpg';
import Faq from "../../components/FAQ/Faq";

const opinions = [
    {
        image: avatar1,
        title: 'Wiele się nauczyłem',
        text: 'Dzięki tej stronie utrwalam swoją wiedzę, wzamian za pomoc innym.'
    },
    {
        image: avatar2,
        title: 'Wiele się nauczyłem',
        text: 'Dzięki tej stronie utrwalam swoją wiedzę, wzamian za pomoc innym.'
    },
    {
        image: avatar3,
        title: 'Wiele się nauczyłem',
        text: 'Dzięki tej stronie utrwalam swoją wiedzę, wzamian za pomoc innym.'
    },

];

export default class MainPage extends React.Component {

    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <Container fluid={false}>
                <Row>
                    <Col>
                        <MyCarousel/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='site-description'>
                            <h1>Opis</h1>
                            <p>Bacon ipsum dolor amet tenderloin t-bone ribeye pancetta, pork chop shank ham capicola
                                brisket pig kevin chuck pork belly. Biltong ham hock tail alcatra kielbasa tongue,
                                meatball
                                short loin pork loin jowl capicola meatloaf brisket. Shoulder kielbasa picanha, bacon
                                buffalo frankfurter jowl swine bresaola fatback. Boudin capicola chuck beef jerky filet
                                mignon. Kielbasa kevin tri-tip tongue sausage, pork chop pig fatback biltong andouille.
                                Beef
                                ribs cupim burgdoggen meatball pastrami, ball tip filet mignon. Boudin burgdoggen ham,
                                pork
                                tri-tip beef ribs fatback landjaeger bacon chuck sausage meatball strip steak kielbasa
                                doner.</p>
                        </div>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <h1>
                            <div id='opinions'>Opinie</div>
                        </h1>
                    </Col>
                </Row>

                <Row>
                    <Col sm="4"><MyCard
                        image={opinions[0].image}
                        title={opinions[0].title}
                        text={opinions[0].text}
                    /></Col>
                    <Col sm="4"><MyCard
                        image={opinions[1].image}
                        title={opinions[1].title}
                        text={opinions[1].text}
                    /></Col>
                    <Col sm="4"><MyCard
                        image={opinions[2].image}
                        title={opinions[2].title}
                        text={opinions[2].text}
                    /></Col>
                </Row>

                <Row>
                    <Col>
                        <div className='faq'>
                            <h1>FAQ</h1>
                            <Faq/>
                        </div>
                    </Col>
                </Row>

            </Container>
        )
    }
}