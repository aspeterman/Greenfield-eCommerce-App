import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Input, FormControl } from '@material-ui/core';
import Header from './Header';
class HomeView extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
        }
    }

    handleNameChange = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value,
        });
    }

    submitName = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_NAME', payload: this.state.name };
        console.log(this.state);
        this.props.dispatch(action);
    }
    render() {

        return (
            <div className="main">
                <Header className={this.props.home} />
                <div className="flex-box flex-evenly form-zone">
                    <div className="center">
                        <h2>Products</h2>
                    </div>
                    <div className="instructions column-6 text-left">
                        <p>Hello World!</p>

                        <p>To get started, please enter your name.</p>
                        <div className="flex-box flex-center">
                            <FormControl>
                                <Input aria-label="name" className="margin-top-15" placeholder="Enter your name" value={this.state.name} onChange={this.handleNameChange} required /> <br /><br />
                                <Button color="primary" variant="contained" onClick={this.submitName}>Submit</Button>
                            </FormControl>
                        </div>

                    </div>
                </div>

            </div>


        );
    }
}
const mapStateToProps = state => ({
    home: state.home
})
export default connect(mapStateToProps)(HomeView);