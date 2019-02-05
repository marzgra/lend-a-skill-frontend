import React from 'react';
import {handleResponse} from "../../Helpers";
import {MESSAGES_API_URL} from "../../config";
import {ListGroup} from "reactstrap";
import ListGroupItem from "reactstrap/es/ListGroupItem";

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
                console.log(result)
                this.setState({conversations: result.convs});
                console.log(this.state.conversations)
            })
            .catch((error) => {
                console.log(error);
                this.setState({error: error.message});
            });
    }

    render(){
        const {conversations} = this.state;
        return(
            <div>
                <ListGroup>
                    {conversations.map(conv =>
                        <ListGroupItem tag="a" href={'/messages/' + conv}>
                            {conv}
                        </ListGroupItem>
                    )}
                </ListGroup>
            </div>
        );
    }

}