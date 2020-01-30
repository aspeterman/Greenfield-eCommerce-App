
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Dialog} from '@material-ui/core';

class RatingsView extends Component {
    constructor(){
        super();
    this.state = {
            fit: 0,
            style: 0,
            overall: 0,
            image: '',
            open: false,

        }
    }
    handleClose = () => {
        this.setState({
            ...this.state,
            open: false,
            image: ''
        })
    }
    handleRangeChangeFor = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value,
        });
    }

    navigateBack = () => {
        this.props.history.push('/products');
    }
    sendValueToRedux = () => {
        let action = {type: 'STYLE_RATING', payload: this.state.style};
        this.props.dispatch(action);
        action = {type: 'FIT_RATING', payload: this.state.fit};
        this.props.dispatch(action);
        action = {type: 'OVERALL_RATING', payload: this.state.overall};
        this.props.dispatch(action);
        this.props.history.push('/review');
    }
    render(){
        return(
            <div className="main">
                    <div className="main">
                <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-4">
                        <Dialog open={this.state.open} onClose={this.handleClose}>
                            <div className="dialog">
                                <div className="flex-box flex-end close-icon" onClick={this.handleClose}>x</div>

                                <div><h3>Photo</h3><img src='' /></div>
                            </div>
                        </Dialog>
                    </div>
                        <div className="ratings">
                            <h4>Rate Our Product</h4>
                            <p>Please rank our product for each category listed below on a scale from 0 (worst)  - 5 (best).</p>
                            <div>
                            <label>style of product: {this.state.style}/5</label> <input value={this.state.style} onChange={(event)=>this.handleRangeChangeFor(event, 'style')} type="range" min="0" max="5" required/>
                            </div>
                            <div className="flex-col slider-div column-12">
                            <label>fit of product: {this.state.fit}/5</label> <input value={this.state.fit} onChange={(event)=>this.handleRangeChangeFor(event, 'fit')} className="slider column-8" type="range" min="0" max="5" required/>
                            </div>
                            <div className="flex-col slider-div column-12">
                            <label>Overall impression of product: {this.state.overall}/5</label> <input value={this.state.overall} onChange={(event)=>this.handleRangeChangeFor(event, 'overall')} className="slider column-8" type="range" min="0" max="5" required/>
                            </div>
                            <div className="flex-box flex-center margin-top-15">
                            <Button variant="contained" color="secondary" onClick={()=>this.sendValueToRedux()}>Submit</Button>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(RatingsView);