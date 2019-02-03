import React from 'react';
import {Alert} from 'reactstrap';

class AlertComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            // message: ''
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                {console.log(this.props.message)}
                {this.props.message}
            </Alert>
        );
    }
}

export default AlertComponent;