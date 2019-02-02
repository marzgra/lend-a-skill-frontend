import React from 'react';
import {ACCOUNTS_API_URL} from "../../config";
import {Alert, Button, Form, FormGroup, Input, Label, UncontrolledAlert} from "reactstrap";

export default class PasswordResetComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            error: '',
            redirect: false,
        };
    }

    handleSubmit = () => {
        fetch(`${ACCOUNTS_API_URL}/login/reset/${this.state.email}`,{
            method: "POST"
        })
            .then(() => {
                this.setState({redirect: true});
            })
            .catch((error) => {
                console.log(error);
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

    renderRedirect = () => {
      if (this.state.redirect) {
          return (
              <div>
                  <Alert color="success">
                      Wiadomość wysłana!
                  </Alert>
              </div>
          )
      }
    };

    render() {
        const {error} = this.state;
        return (
            <div className="login-form">
                {error && <UncontrolledAlert color="danger">
                    {error}
                </UncontrolledAlert>}
                <Form>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input
                            type="text"
                            name="email"
                            id="email-field"
                            placeholder="email"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <Button color="primary" onClick={this.handleSubmit}>Wyślij email z nowym hasłem</Button>
                    {this.renderRedirect()}

                </Form>
            </div>

        );
    }
};