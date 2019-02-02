import React from 'react';
import {ACCOUNTS_API_URL} from "../../config";
import {handleResponse} from "../../Helpers";

class AccountInfo extends React.Component {

    constructor() {
        super();

        this.state = {
          login: '',
          name: '',
          surname: '',
          city: '',
        };
    }

    componentDidMount() {
        fetch(`${ACCOUNTS_API_URL}/users`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                token: localStorage.getItem('token')
            })
        })
            .then(handleResponse)
            .then((result) => {
                console.log(localStorage.getItem('token'));
                this.setState({login: true});
                return Promise.resolve(result);
            })
            .catch((error) => {
                // Show error message, if request fails and set loading to false
                console.log(error);
                this.setState({
                    error: error.message,
                });
            });
    }


    render() {
        const {login} = this.state;
        return (
            <div>
                <h3>{login}</h3>
            </div>
        );

    };
};
export default AccountInfo;