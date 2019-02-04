import React from 'react';
import {withRouter} from "react-router-dom";
import {Button, Table} from "reactstrap";

class FoundUsersList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // users: [],
        };
    }

    handleRedirectToUserPage(login) {
        this.state.history.push(`/users/${login}`)
    }


    render() {
        const {history} = this.props;
        const {users} = this.props;

        console.log(users);


        return (
            <Table>
                <thead>
                <tr>
                    <th>Login</th>
                    <th>Miejscowość</th>
                    <th>Profil</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user =>
                    <tr key={user.login}>
                        <td>
                            <span className="Table-login">{user.login}</span>
                        </td>
                        <td>
                            <span className="Table-city">{user.city}</span>
                        </td>
                        <td><Button color="info" onClick={() => history.push(`/users/${user.login}`)}> Profil </Button>
                        </td>
                    </tr>
                )}

                </tbody>
            </Table>
        );
    }

}

export default withRouter(FoundUsersList);