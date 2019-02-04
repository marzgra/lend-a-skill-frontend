import React from 'react';
import Container from "reactstrap/es/Container";
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {ACCOUNTS_API_URL} from "../../config";
import {handleResponse} from "../../Helpers";
import Select from "react-select";
import './Search.css';
import {withRouter} from "react-router-dom";
import FoundUsersList from "../../components/FoundUsersList/FoundUsersList";

class Search extends React.Component {

    constructor() {
        super();

        this.state = {
            login: '',
            city: '',
            selectedLearning: [],
            selectedTeaching: [],
            options: [],
            results: [],
            showResult: false,
        }
    }

    componentWillMount() {
        fetch(`${ACCOUNTS_API_URL}/interests`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        })
            .then(handleResponse)
            .then((result) => {
                this.setState({options: result});
            });
    }

    handleInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        this.setState({[inputName]: inputValue});
    };

    handleChangeTeaching = (selectedTeaching) => {
        this.setState({selectedTeaching});
    };
    handleChangeLearning = (selectedLearning) => {
        this.setState({selectedLearning});
    };

    handleSubmit = () => {
        fetch(`${ACCOUNTS_API_URL}/searchUsers`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                login: this.state.login,
                city: this.state.city,
                teaching: this.state.selectedTeaching,
                learning: this.state.selectedLearning,
            })
        })
            .then(handleResponse)
            .then((result) => {
                console.log(result.result);
                this.setState({results: result.result, showResults: true});
                return Promise.resolve(result);
            })
            .catch((error) => {
                // Show error message, if request fails and set loading to false
                this.setState({
                    error: error.message,
                });
            });
    };

    render() {
        const {options, selectedTeaching, selectedLearning, showResults, results} = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <Form className="searchForm">
                            <h5>Szukaj według:</h5>
                            <FormGroup>
                                <Label for="Login">Login</Label>
                                <Input type="login" name="login" placeholder="login"
                                       onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="City">Miasto</Label>
                                <Input type="city" name="city" placeholder="city"
                                       value={this.state.city}
                                       onChange={this.handleInputChange}/>
                            </FormGroup>
                            <Label for="teaching">Oferuje lekcje</Label>
                            <Select
                                value={selectedTeaching}
                                onChange={this.handleChangeTeaching}
                                options={options}
                                isMulti
                            />
                            <br/>
                            <Label for="learning">Chce się nauczyć</Label>
                            <Select
                                value={selectedLearning}
                                onChange={this.handleChangeLearning}
                                options={options}
                                isMulti
                            />

                            <br/>
                            <Button color="success" onClick={this.handleSubmit}>Szukaj</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {console.log(results)}
                        {showResults && <FoundUsersList users={results}/>}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(Search);