import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import './LoginForm.css'

export default class LoginForm extends React.Component {

    constructor() {
        super();

        this.state = {
            login: '',
            password: '',
            error: '',
            loading: false,
        };

    }

    render() {
        return (
            <div className="login-form">
                <Form>
                    <FormGroup>
                        <Label for="Login">Login</Label>
                        <Input type="login" name="login" id="login-field" placeholder="login"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Hasło</Label>
                        <Input type="password" name="password" id="password-field" placeholder="hasło"/>
                    </FormGroup>

                    <Button>Submit</Button>
                </Form>
            </div>

        );
    }
}