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
        title: 'Wiele się nauczyłam',
        text: 'Dzięki tej stronie utrwalam swoją wiedzę, wzamian za pomoc innym.',
        name: 'Kinga Wrzos'
    },
    {
        image: avatar2,
        title: 'Przyjemne z pożytecznym',
        text: 'Ktoś mądry kiedyś powiedział, że najepszm sposobem nauki jest uczenie innych. ' +
            'Zgodnie z tą tezą, Lend A Skill to świetne miejsce do nauki.',
        name: 'Kuba Jarosz'
    },
    {
        image: avatar3,
        title: 'Poznaję ludzi pełnych pasji',
        text: 'Zawsze chciałem nauczyć się programować. Dzięki Lend A Skill znalazłem wspaniałych ludzi' +
            'chętnych dzielić sie swoimi zainteresowaniami. A to wszystko w zamian ' +
            'za kilka moich lekcji hiszpańskiego!',
        name: 'Krzysiek Kowalski'
    },

];

const MainPage = () => {

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
                        <p>Lend a skill to wyjątkowe miejśce, gdzie na pewno znajdziesz osobę chętną do
                            wspólnej nauki. Założenie konta jest bezpłatne, a zdobyta wiedza, bezcenna!
                        </p>
                        <p>
                            Głównym celem platformy jest wymiana wiedzy, udzielane korepetycje są
                            bazpłatne, jedyne co jest wymagane, to żebyć nauczył korepetytora czegoś w zamian!
                        </p>
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
                    name={opinions[0].name}
                    text={opinions[0].text}
                /></Col>
                <Col sm="4"><MyCard
                    image={opinions[1].image}
                    title={opinions[1].title}
                    name={opinions[1].name}
                    text={opinions[1].text}
                /></Col>
                <Col sm="4"><MyCard
                    image={opinions[2].image}
                    title={opinions[2].title}
                    name={opinions[2].name}
                    text={opinions[2].text}
                /></Col>
            </Row>

            <Row>
                <Col>
                    <div id='faq'>
                        <h1>FAQ</h1>
                        <Faq/>
                    </div>
                </Col>
            </Row>

        </Container>
    )

};

export default MainPage;