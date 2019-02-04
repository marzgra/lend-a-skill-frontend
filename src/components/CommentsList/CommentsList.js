import React from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {handleResponse} from "../../Helpers";
import {COMMENTS_API_URL} from "../../config";
import StarRatingComponent from 'react-star-rating-component';
import {withRouter} from "react-router-dom";


class CommentsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            page: 1,
            amount: 50
        };
    }

    componentWillMount() {
        this.fetchComments();
    }

    fetchComments = () => {
        fetch(`${COMMENTS_API_URL}/comments/${this.props.match.params.login}`, {
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
        const {comments} = this.state;

        if (comments) {
            return (
                <div className="comments-list">
                    <h5>Komentarze: </h5>
                    <ListGroup>
                        {comments.map(comment =>
                            <ListGroupItem>
                                Autor: {comment.authorLogin} Data: {comment.timestamp}<br/>
                                {comment.comment} <br/>
                                Ocena: <StarRatingComponent name="Ocena" value={comment.rate} editing="false"/>

                            </ListGroupItem>
                        )}
                    </ListGroup>
                </div>

            );
        }

        // return (
        //     <div className="comments-list">
        //         <h5>Komentarze:</h5>
        //         <ListGroup>
        //             <ListGroupItem>
        //                 Nie znaleziono komentarzy.
        //             </ListGroupItem>
        //         </ListGroup>
        //     </div>
        // )


    }
}

export default withRouter(CommentsList);