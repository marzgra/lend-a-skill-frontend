import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import './LoginForm.css'
import {ACCOUNTS_API_URL} from "../../config";
import {handleResponse} from "../../Helpers";
import {withRouter} from "react-router-dom";
import AlertComponent from "../AlertComponent/AlertComponent";


class LoginForm extends React.Component {

    constructor() {
        super();

        this.state = {
            login: '',
            password: '',
            error: '',
            redirect: false
        };

    }

    handleInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        this.setState({[inputName]: inputValue});
    };

    handleLogin = () => {
        fetch(`${ACCOUNTS_API_URL}/login`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                login: this.state.login,
                password: this.state.password
            })
        })
            .then(handleResponse)
            .then((result) => {
                localStorage.setItem('token', result.token);
                localStorage.setItem('login', this.state.login);
                console.log(result);
                this.setState({redirect: true});
                return Promise.resolve(result);
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: error.message,
                });
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            this.props.history.push(`/users/${this.state.login}`);
        }
    };

    redirectToResetPass = () => {
        this.props.history.push('/password')
    };

    render() {
        const {error} = this.state;
        return (
            <div className="login-form">
                {error && <AlertComponent message={error}/>}
                <Form>
                    <FormGroup>
                        <Label for="Login">Login</Label>
                        <Input
                            type="text"
                            name="login"
                            id="login-field"
                            placeholder="login"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Hasło</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password-field"
                            placeholder="hasło"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <Button color="primary" onClick={this.handleLogin}>Zaloguj</Button>
                    {this.renderRedirect()}

                    <Button color="link" onClick={this.redirectToResetPass}>Resetuj hasło</Button>

                </Form>
            </div>

        );
    }
}

export default withRouter(LoginForm);
