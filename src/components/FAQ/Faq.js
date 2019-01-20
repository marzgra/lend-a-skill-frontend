import React from 'react';
import {ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

export default class Faq extends React.Component {
    render() {
        return (
            <div className="question-list">
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>Jakie są opłaty?</ListGroupItemHeading>
                        <ListGroupItemText>
                            Korzystanie z portalu jest darmowe. Za korepetycje należy .
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                            blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                            blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}