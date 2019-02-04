import React from 'react';

export default class CommentsList extends React.Component{

    constructor(props) {
        super();
        this.state = {
            comments: [],
            page: 1,

        };
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
                    {comments.map((comment) => {
                        <ListItemGroup>

                    })}
                </ListGroup>
            );
        }
}