import React from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {handleResponse} from "../../Helpers";

export default class CommentsList extends React.Component{

    constructor() {
        super();
        this.state = {
            comments: [],
            page: 1,

        };
    }

    componentWillMount() {
        this.fetchComments();
    }

    fetchComments = () => {
            fetch(`${COMMENTS_API_URL}/comments/${login}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("token")
                },
                method: "POST",
                body: JSON.stringify({
                    login: this.state.login,
                    page: this.state.page,
                    amount: this.state.amount
                })
            })
                .then(handleResponse)
                .then((result) => {
                console.log(result);
                    this.setState({comments: result.comments});
                    return Promise.resolve(result);
                })
                .catch((error) => {
                    console.log(error);
                    this.setState({
                        error: error.message,
                    });
                });
        };

        render() {
        const{comments} = this.state;
            return(
                <ListGroup>
                    {comments.map(comment =>
                        <ListGroupItem>
                            Autor: {comment.authorLogin}<br/>
                            {comment.comment} <br/>
                            <StarRateingComponent name="Ocena" value={comment.rate} editing="false"/>
                            Data: {new Date(comment.timestamp)}
                        </ListGroupItem>
                    )}
                </ListGroup>
            );
        }
}