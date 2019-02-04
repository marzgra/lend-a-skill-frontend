import React from 'react';

import './EditAccount.css';
import {Button, Container, Form, FormGroup, Input, Label, UncontrolledAlert} from "reactstrap";
import Select from "react-select";
import {Redirect} from "react-router-dom";
import {ACCOUNTS_API_URL} from "../../config";
import {handleResponse} from "../../Helpers";

export default class EditAccount extends React.Component {

    constructor() {
        super();

        this.state = {
            login: '',
            password: '',
            newPassword: '',
            email: '',
            city: '',
            selectedTeaching: null,
            selectedLearning: null,
            error: '',
            redirect: false,
            options: [],
            aboutMe: '',
        };
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/myAccount'/>
        }
    };

    componentWillMount() {
        // load interests
        fetch(`${ACCOUNTS_API_URL}/interests`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        })
            .then(handleResponse)
            .then((result) => {
                console.log(result);
                this.setState({options: result});
            });

        console.log(localStorage.getItem('token'));
        // load actual user information
        fetch(`${ACCOUNTS_API_URL}/users`, {
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
                this.setState({email: result.email});
                this.setState({selectedTeaching: result.teaching});
                this.setState({selectedLearning: result.learning});
                this.setState({aboutMe: result.aboutMe});
            })
            .catch((error) => {
                console.log(error);
                this.setState({error: error.message});
            });
    }

    handleSubmit = () => {
        fetch(`${ACCOUNTS_API_URL}/users/${this.state.login}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            method: "PUT",
            body: JSON.stringify({
                login: this.state.login,
                name: this.state.name,
                surname: this.state.surname,
                email: this.state.email,
                city: this.state.city,
                teaching: this.state.selectedTeaching,
                learning: this.state.selectedLearning,
                aboutMe: this.state.aboutMe
            })
        })
            .then(handleResponse)
            .catch((error) => {
                // Show error message, if request fails and set loading to false
                this.setState({
                    error: error.message,
                });
            });
    };

    handleSubmitPassword = () => {
        fetch(`${ACCOUNTS_API_URL}/users/${this.state.login}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem('token')
            },
            method: "PUT",
            body: JSON.stringify({
                login: this.state.login,
                oldPassword: this.state.password,
                newPassword: this.state.newPassword,
            })
        })
            .then(handleResponse)
            .catch((error) => {
                // Show error message, if request fails and set loading to false
                this.setState({
                    error: error.message,
                });
            });
    };

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

    render() {
        const {selectedTeaching, selectedLearning, error, options} = this.state;
        return (
            <Container>
                <div className="registerForm">
                    {error && <UncontrolledAlert color="danger">
                        {error}
                    </UncontrolledAlert>}
                    <Form>
                        <h5>Edytuj dane</h5>
                        <FormGroup>
                            <Label for="Login">Login</Label>
                            <Input type="login" name="login" placeholder="login"
                                   value={this.state.login}
                                   disabled
                                   onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Name">Imię</Label>
                            <Input type="name" name="name" placeholder="name"
                                   value={this.state.name}
                                   onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Surname">Nazwisko</Label>
                            <Input type="surname" name="surname" placeholder="surname"
                                   value={this.state.surname}
                                   onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Email">Email</Label>
                            <Input type="email" name="email" placeholder="email"
                                   value={this.state.email}
                                   onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="City">Miasto</Label>
                            <Input type="city" name="city" placeholder="city"
                                   value={this.state.city}
                                   onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="aboutMe">O mnie</Label>
                            <Input type="textarea" name="aboutMe" placeholder="AboutMe"
                                   value={this.state.aboutMe}
                                   onChange={this.handleInputChange}/>
                        </FormGroup>
                        <Label for="teaching">Mogę nauczyć innych</Label>
                        <Select
                            value={selectedTeaching}
                            onChange={this.handleChangeTeaching}
                            options={options}
                            isMulti
                        />
                        <br/>
                        <Label for="learning">Chcę nauczyć się</Label>
                        <Select
                            value={selectedLearning}
                            onChange={this.handleChangeLearning}
                            options={options}
                            isMulti
                        />

                        <br/>
                        <Button color="success" onClick={this.handleSubmit}>Zapisz zmiany</Button>
                        {this.renderRedirect()}

                        <br/>
                        <br/>
                        <h5>Edytuj hasło</h5>
                        <FormGroup>
                            <Label for="password">Stare hasło</Label>
                            <Input type="password" name="password" placeholder="old password"
                                   onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="newPassword">Nowe hasło</Label>
                            <Input type="password" name="newPassword" placeholder="new password"
                                   onChange={this.handleInputChange}/>
                        </FormGroup>

                        <br/>
                        <Button color="success" onClick={this.handleSubmitPassword}>Zapisz nowe hasło</Button>
                        {this.renderRedirect()}

                    </Form>
                </div>
            </Container>
        );
    }
}