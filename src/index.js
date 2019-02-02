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
                    <Route component={NotFound}/>
                </Switch>

                <Footer/>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

