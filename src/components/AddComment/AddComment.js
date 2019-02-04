import React from 'react';
import {withRouter} from "react-router-dom";
import {COMMENTS_API_URL} from "../../config";
import {handleResponse} from "../../Helpers";
import {Button, Col, Input, InputGroup, InputGroupAddon, Row} from "reactstrap";
import StarRatingComponent from 'react-star-rating-component';
import Container from "reactstrap/es/Container";
import './AddComment.css';


class AddComment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            authorLogin: localStorage.getItem('login'),
            userLogin: this.props.match.params.login,
            rate: 0,
            error: ''
        };
    }

    handleSubmit() {
        fetch(`${COMMENTS_API_URL}/comments`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            method: "POST",
            body: JSON.stringify({
                comment: this.state.comment,
                authorLogin: this.state.authorLogin,
                userLogin: this.state.userLogin,
                rate: this.state.rate
            })
        })
            .then(handleResponse)
            .then((result) => {
                console.log('onSubmit returns: ', result);
            })
            .catch((error) => {
                console.log(error);
                this.setState({error: error.message});
            });
    }

    handleInputChange = (e) => {
        const inputValue = e.target.value;

        this.setState({comment: inputValue});
    };

    onStarClick(value) {
        this.setState({rate: value});
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <div className="add-comment">
                            <h5>Dodaj komentarz:</h5>
                            <InputGroup>
                                <Input
                                    type="comment"
                                    name="comment"
                                    id="comment-field"
                                    placeholder="Komentarz"
                                    onChange={this.handleInputChange}
                                />
                                <InputGroupAddon addonType="append">
                                    <Button onClick={this.handleSubmit.bind(this)} color="success">Dodaj komentarz</Button>
                                </InputGroupAddon>
                            </InputGroup>
                            Ocena: <StarRatingComponent
                            name="rate"
                            onStarClick={this.onStarClick.bind(this)}
                        />
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default withRouter(AddComment);