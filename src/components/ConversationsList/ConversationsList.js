import React from 'react';
import {handleResponse} from "../../Helpers";

export default class ConversationsList extends React.Component {

    constructor() {
        super();

        this.state = {
            conversations: [],
        };
    }

    componentWillMount() {
        fetch(`${MESSAGES_API_URL}/messages`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            },
            method: "GET"
        })
            .then(handleResponse)
            .then((result) => {
                console.log(result);
                this.setState({login: result.conversations});
            })
            .catch((error) => {
                console.log(error);
                this.setState({error: error.message});
            });
    }

    render(){
        return(
            
        );
    }

}