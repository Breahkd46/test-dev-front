import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

// Server
import axios from "axios";
import { SERVER_URL } from "./../consts";

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: "counter",
            content: []
        }
        this.handleResetHistory = this.handleResetHistory.bind(this);
    }

    componentDidMount() {
        axios
            .get(
                SERVER_URL + "/history"
            )
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    console.log(res.data);
                    this.setState({
                        content: res.data
                    })
                } else {
                    console.log(res.data);
                }

            })
            .catch( err => {
                console.log(err)
                }
            );
    }

    handleResetHistory() {
        axios
            .delete(
                SERVER_URL + "/history"
            )
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    console.log(res.data);
                    this.setState({
                        content: res.data
                    })
                } else {
                    console.log(res.data);
                }
            })
            .catch( err => {
                    console.log(err);
                }
            );
    }

    render() {
        if (!this.state.isLoading) {
            return (
                <p>Chargement...</p>
            )
        }else {
            return (
                <div>
                    <Button onClick={this.handleResetHistory}>
                        Reinitialiser l'historique
                    </Button>
                    <table>
                        <thead>
                        <tr>
                            <th>Operation</th>
                            <th>Value</th>
                            <th>Counter</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*<p>{this.state.content}</p>*/}
                        {this.state.content.map((row, index) => (
                            <tr key={index}>
                                <td>{row.operation}</td>
                                <td>{row.value}</td>
                                <td>{row.counter}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default History;