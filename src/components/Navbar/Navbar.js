import React from 'react';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,} from 'reactstrap';
import './Navbar.css';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isLogged: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.setState({isLogged: true});
        } else {
            this.setState({isLogged: false});
        }
    };

    logOut = () => {
        localStorage.removeItem('token');
    };

    render() {
        {
            console.log(this.state.isLogged)
        }
        if (this.state.isLogged) {
            return (
                <Container fluid={true}>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Lend A Skill</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Strona główna</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#opinions">Opinie</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#faq">FAQ</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/myAccount">Moje konto</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/search">Szukaj</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/" onClick={this.logOut}>Wyloguj</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            );
        }
        return (
            <Container fluid={true}>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Lend A Skill</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Strona główna</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#opinions">Opinie</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#faq">FAQ</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/login">Logowanie</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/register">Rejestracja</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        );
    }
}