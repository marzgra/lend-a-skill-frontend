import React from 'react';
import {ACCOUNTS_API_URL} from "../../config";
import {handleResponse} from "../../Helpers";
import './AccountInfo.css';

class AccountInfo extends React.Component {

    constructor() {
        super();

        this.state = {
            login: '',
            name: '',
            surname: '',
            city: '',
            teaching: [],
            learning: [],
            aboutMe: '',
        };
    }

    componentWillMount() {
        console.log(localStorage.getItem('token'));
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
                console.log(result);
                this.setState({login: result.login});
                this.setState({name: result.name});
                this.setState({surname: result.surname});
                this.setState({city: result.city});
                this.setState({teaching: result.teaching});
                this.setState({learning: result.learning});
                this.setState({aboutMe: result.aboutMe});
            })
            .catch((error) => {
                console.log(error);
                this.setState({error: error.message});
            });
    }


    render() {
        const {login, name, surname, city, aboutMe, teaching, learning} = this.state;
        const teachingList = teaching.map((item) => <li className="list" key={item.label}>{item.label}</li>);
        const learningList = learning.map((item) => <li className="list" key={item.label}>{item.label}</li>);

        if(localStorage.getItem('token') !== 'null'){
            return (
                <div>
                    <div className="account-info">
                        <div className="short-info">
                            <h3>{login}</h3>
                            <p>{name} {surname} <br/>
                                Miasto: {city}</p>
                        </div>
                    </div>
                    <div className="about-me">
                        <h5>O mnie</h5>
                        <p>{aboutMe}</p>
                    </div>
                    <div className="teaching-list">
                        <h5> Mogę Cię nauczyć:</h5>
                        <ul className="list">
                            {teachingList}
                        </ul>
                    </div>
                    <div className="learning-list">
                        <h5> Chcę się nauczyć:</h5>
                        <ul className="list">
                            {learningList}
                        </ul>
                    </div>
                </div>
            );
        }
        return (
            <div className="notification">
                <h5>Zaloguj się aby mieć dostep do tej strony.</h5>
            </div>
        )

    };
}

export default AccountInfo;