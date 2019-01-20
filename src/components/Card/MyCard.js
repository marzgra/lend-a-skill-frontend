import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import './MyCard.css'

const MyCard = (props) => {
    const {image, title, text} = props;

    return (
        <div>
            <Card>
                <CardImg top width="100%"
                         src={image}
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{text}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default MyCard;