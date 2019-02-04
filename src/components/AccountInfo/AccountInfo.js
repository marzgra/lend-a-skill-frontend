import React from 'react';
import {ACCOUNTS_API_URL} from "../../config";
import {handleResponse} from "../../Helpers";
import './AccountInfo.css';
import InterestList from "../InterestList/InterestList";
import Container from "reactstrap/es/Container";
import {Button, Col, Row} from "reactstrap";
import {withRouter} from "react-router-dom";

class AccountInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            name: '',
            surname: '',
            city: '',
            teaching: [],
            learning: [],
            aboutMe: '',
        };
    }

    componentWillMount() {
        console.log(localStorage.getItem('token'));
        fetch(`${ACCOUNTS_API_URL}/users/${this.state.login}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                token: localStorage.getItem('token')
            })
        })
            .then(handleResponse)
            .then((result) => {
                console.log(result);
                this.setState({login: result.login});
                this.setState({name: result.name});
                this.setState({surname: result.surname});
                this.setState({city: result.city});
                this.setState({teaching: result.teaching});
                this.setState({learning: result.learning});
                this.setState({aboutMe: result.aboutMe});
            })
            .catch((error) => {
                console.log(error);
                this.setState({error: error.message});
            });
    }

    redirectToMessages(login) {
        this.props.history.push(`/messages/${login}`);
    }

    render() {
        const {login, name, surname, city, aboutMe, teaching, learning} = this.state;
        const teachingList = teaching.map((item) => <li className="list" key={item.label}>{item.label}</li>);
        const learningList = learning.map((item) => <li className="list" key={item.label}>{item.label}</li>);

        if (localStorage.getItem('token') !== 'null') {
            return (
                <Container>
                    <Row>
                        <Col>
                            <div className="account-info">
                                <div className="short-info">
                                    <h3>{login}</h3>
                                    <p>{name} {surname} <br/>
                                        Miasto: {city}</p>
                                </div>

                                <Button color="info"
                                        onClick={() => this.redirectToMessages(login)}>
                                    Wyślij wiadomość
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="about-me">
                                <h5>O mnie</h5>
                                <p>{aboutMe}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InterestList title="Mogę Cię nauczyć:" list={teachingList}/>
                        </Col>
                        <Col>
                            <InterestList title="Chcę się nauczyć:" list={learningList}/>
                        </Col>
                    </Row>
                </Container>
            );
        }

        return (
            <div className="notification">
                <h5>Zaloguj się, aby mieć dostep do tej strony.</h5>
            </div>
        );
    }
}

export default withRouter(AccountInfo);