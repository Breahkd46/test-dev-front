import React, { Component } from 'react';
import {ListGroup, Button, InputGroup, FormControl, FormLabel} from "react-bootstrap";
import FormGroup from "react-bootstrap/es/FormGroup";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {SERVER_URL} from "../consts";

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            counter: null,
            value: null,
            select: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        this.handleChangeValue = this.handleChangeValue.bind(this)
    }

    componentDidMount() {
        axios
            .get(
                SERVER_URL + "/counter"
            )
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    console.log(res.data);
                    this.setState({
                        isLoaded: true,
                        counter: res.data
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

    handleChangeSelect(e) {
        this.setState({
            select: e.target.value
        })
    }

    handleChangeValue(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit() {
        // if (form.checkValidity() === false) {
        //     // event.preventDefault();
        //     event.stopPropagation();
        // }
        // this.setState({ validated: true });
        console.log(this.state.value)
        console.log(this.state.select)
        axios
            .get(
                SERVER_URL + "/counter?operation=" +
                this.state.select +
                "&value=" +
                this.state.value
            )
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    console.log(res.data);
                    this.setState({
                        counter: res.data
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

    render() {
        if (this.state.isLoaded) {
            return (
                <div>
                {/*<div>*/}
                    {/*<p>{this.state.counter}</p>*/}
                    {/*<Form >*/}
                        {/*<Form.Group controlId="exampleForm.ControlSelect1">*/}
                            {/*<Form.Control as="select" multiple>*/}
                                {/*<option>ADDITION</option>*/}
                                {/*<option>SOUSTRACTION</option>*/}
                                {/*<option>MULTIPLICATION</option>*/}
                                {/*<option>DIVISION</option>*/}
                            {/*</Form.Control>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group controlId="exampleForm.ControlInput1">*/}
                            {/*/!*<Form.Label>Email address</Form.Label>*!/*/}
                            {/*<Form.Control type={"number"} placeholder="Valeur" />*/}
                        {/*</Form.Group>*/}
                        {/*<Button type="onClick" onClick={e => this.handleSubmit(e)}>*/}
                            {/*Valider*/}
                        {/*</Button>*/}
                    {/*</Form>*/}
                {/*</div>*/}

                    {/*<img src={"minus-sign-in-filled-circle.png"}/>*/}
                    {/*<img src={"add-button-inside-black-circle.png"}/>*/}
                    {/*<img src={"cancel-button.png"}/>*/}

                    <div>
                        <div className={"champCounter"}>
                        <span className={"nbCounter"}>{this.state.counter}</span>
                        </div>
                        {/*<form onSubmit={(e) => {this.handleSubmit(e); return false}}>*/}
                            <div className="form-group">
                                <select className={"form-control list-group champ"} onChange={this.handleChangeSelect} multiple>
                                    <option className={"list-group-item list-group-item-action"} value={"ADDITION"}>ADDITION</option>
                                    <option className={"list-group-item list-group-item-action"} value={"SOUSTRACTION"}>SOUSTRACTION</option>
                                    <option className={"list-group-item list-group-item-action"} value={"MULTIPLICATION"}>MULTIPLICATION </option>
                                    <option className={"list-group-item list-group-item-action"} value={"DIVISION"}>DIVISION </option>
                                </select>
                            </div>
                            <div className={"form-group champ champAlign"}>
                                <label>
                                    <input className={"form-control"}
                                        type="text"
                                           placeholder={"Valeur"}
                                        value={this.state.value}
                                        onChange={this.handleChangeValue}
                                    />
                                </label>
                            </div>
                            <div className={"champAlign"}>
                                <input className={"btn btn-primary buttonValidation"} type="button" onClick={this.handleSubmit} value="Valider"/>
                            </div>
                        {/*</form>*/}
                    </div>
                </div>

            )
        } else {
            return (<p>Chargement...</p>)
        }

    }
}

export default Counter;
