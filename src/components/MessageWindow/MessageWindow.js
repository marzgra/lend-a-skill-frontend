import React from 'react';
import {withRouter} from "react-router-dom";
import {MESSAGES_API_URL} from "../../config";
import {handleResponse} from "../../Helpers";
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import './MessageWindow.css'

class MessageWindow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            message: ''
        }
    }

    componentWillMount() {
        this.fetchMessages();
    }

    fetchMessages(){
        fetch(`${MESSAGES_API_URL}/messages/${this.props.match.params.login}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            },
            method: "GET"
        })
            .then(handleResponse)
            .then((result) => {
                console.log(result);
                this.setState({messages: result.conversation});
            })
            .catch((error) => {
                console.log(error);
                this.setState({error: error.message});
            });
    }

    handleSubmit() {
        fetch(`${MESSAGES_API_URL}/messages`, {
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': localStorage.getItem('token')
            },
            method: "POST",
            body: JSON.stringify({
                authorLogin: localStorage.getItem('login'),
                receiverLogin: this.props.match.params.login,
                message: this.state.message
            })
        })
            .then(handleResponse)
            .then((result) => {
                console.log('onSubmit returns: ', result);
                this.setState({message: ''});
                this.render();
            })
            .catch((error) => {
                console.log(error);
                this.setState({error: error.message});
            });
    }

    handleInputChange = (e) => {
        const inputValue = e.target.value;

        this.setState({message: inputValue});
    };


    render() {
        const {messages} = this.state;
        return (
            <div>
                <h5>Rozmowa z {this.props.match.params.login}</h5>

                <div className="conv-window">
                    {messages.map(msg =>
                        <div className="msg">
                            {msg.senderLogin} {msg.timestamp} <br/>
                            {msg.message}
                        </div>
                    )}
                </div>
                <div className="conv-input">
                    <InputGroup>
                        <Input
                            type="comment"
                            name="comment"
                            id="comment-field"
                            placeholder="Wiadomość"
                            onChange={this.handleInputChange}
                        />
                        <InputGroupAddon addonType="append">
                            <Button onClick={this.handleSubmit.bind(this)} color="success">Wyślij</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
        );
    }
}

export default withRouter(MessageWindow);