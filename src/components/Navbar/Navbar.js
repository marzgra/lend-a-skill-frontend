import React from 'react';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,} from 'reactstrap';
import './Navbar.css';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
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