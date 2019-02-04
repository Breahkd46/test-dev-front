import React, { Component } from 'react';
import {Nav} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "react-bootstrap/"
import Counter from "./Components/Counter";

import logo from './logo.svg';
import History from "./Components/History";
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "counter",
    }
  }

    handleClickNav(status) {
        this.setState({
            status: status
        })
    }

    render() {
        if (this.state.status === "") {
            return (<p>Chargement</p>)
        } else {
            return (
                <Router>
                    <div>
                        <Navbar bg="dark" variant="dark">
                            <Nav className="mr-auto">
                                {this.state.status === "counter"?
                                    (
                                        <Link onClick={() => this.handleClickNav("history")} to={"/history"}>Acceder à l'historique</Link>
                                ):(
                                        <Link onClick={() => this.handleClickNav("counter")} to={"/"}>Acceder au compteur</Link>
                                    )}

                                {/*<Nav.Link onSelected={console.log("ok")} href="/history">Acceder à l'historique</Nav.Link>*/}
                            </Nav>
                        </Navbar>
                        <Route exact path="/" component={Counter}/>
                        <Route path="/history" com component={History}/>
                    </div>
                </Router>
            );
        }
    }
}

export default App;
