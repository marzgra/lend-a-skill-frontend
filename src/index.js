import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/notfound/NotFound";
import MainPage from './pages/MainPage/MainPage';
import Login from './pages/Login/Login';
import Register from './pages/Registration/Register';
import Account from "./pages/Account/Account";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import Messages from "./pages/Messages/MessagesPage";
import EditAccount from "./pages/EditAccount/EditAccount";
import Search from "./pages/Search/Search";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>

                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/password" component={PasswordReset}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/myAccount" component={Account}/>
                    <Route exact path="/users/:login" component={Account}/>
                    <Route exact path="/messages/:login" component={Messages}/>
                    <Route exact path="/edit" component={EditAccount}/>
                    <Route exact path="/search" component={Search}/>
                    <Route component={NotFound}/>
                </Switch>

                <Footer/>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

