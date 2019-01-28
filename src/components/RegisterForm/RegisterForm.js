import React from 'react';

import './RegisterForm.css';
import {Button, Form, FormGroup, Input, Label, UncontrolledAlert} from "reactstrap";
import Select from "react-select";
import {Redirect} from "react-router-dom";
import {ACCOUNTS_API_URL} from "../../config";
import {handleResponse} from "../../Helpers";

export default class RegisterForm extends React.Component {

    constructor() {
        super();

        this.state = {
            login: '',
            password: '',
            email: '',
            city: '',
            selectedTeaching: null,
            selectedLearning: null,
            error: '',
            redirect: false,
            options: [],
        };
    }


    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/myAccount'/>
        }
    };

    componentWillMount() {
        fetch(`${ACCOUNTS_API_URL}/interests`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        })
            .then(handleResponse)
            .then((result) => {
                this.setState({options: result.map((it) => {return it.name.toString()})});
                console.log(this.state.options);
            });
    }

    handleSubmit = () => {
        fetch(`${ACCOUNTS_API_URL}/register`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                login: this.state.login,
                password: this.state.password,
                name: this.state.name,
                surname: this.state.surname,
                email: this.state.email,
                city: this.state.city,
                teaching: this.state.selectedTeaching,
                learning: this.state.selectedLearning,
            })
        })
            .then(handleResponse)
            .then((result) => {
                localStorage.setItem('token', result.token);
                this.setState({redirect: true});
                return Promise.resolve(result);
            })
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
        console.log(`Option selected:`, selectedTeaching);
    };
    handleChangeLearning = (selectedLearning) => {
        this.setState({selectedLearning});
        console.log(`Option selected:`, selectedLearning);
    };

    render() {
        const {selectedTeaching, selectedLearning, error, options} = this.state;
        return (
            <div className="registerForm">
                {error && <UncontrolledAlert color="danger">
                    {error}
                </UncontrolledAlert>}
                <Form>
                    <FormGroup>
                        <Label for="Login">Login</Label>
                        <Input type="login" name="login" placeholder="login" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Name">Imię</Label>
                        <Input type="name" name="name" placeholder="name" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Surname">Nazwisko</Label>
                        <Input type="surname" name="surname" placeholder="surname" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" placeholder="email" onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Hasło</Label>
                        <Input type="password" name="password" placeholder="password"
                               onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="City">Miasto</Label>
                        <Input type="city" name="city" placeholder="city" onChange={this.handleInputChange}/>
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
                    <Button onClick={this.handleSubmit}>Utwórz konto</Button>
                    {this.renderRedirect()}

                </Form>
            </div>
        );
    }

}