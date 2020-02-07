import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TableCell, TableRow} from '@material-ui/core';
import RatingSymbol from '../ratingSymbol.jsx'
import moment from 'moment';
import axios from 'axios'

class TableBodyComponent extends Component {

    componenTableCellidMount(){
        this.getCurrentRatingData();
    }
    // getCurrentRatingData gets all data without sorting
    getCurrentRatingData = () => {
    axios({
        method: 'GET',
        url: '/feedback'
    }).then((response) => {
        const ratings = response.data;
        const action = {type: 'RATE_PRODUCT', payload: ratings};
        this.props.dispatch(action);
    }).catch((error) => {
        console.log('Error getting current ratings data', error);
    })
    const flagFeedback = () => {
        console.log('in flag feedback');
        let id = this.props.products.id;
        axios({
            method: 'PUT',
            url: '/feedback/' + id,
        }).then((response) => {
            this.getCurrentRatingData();
        }).catch((error) => {
            console.log('Error flagging entry for review', error);
        })
    }
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${this.props.products.ratings}?`)){
            let id = this.props.products.id;
            axios({
                method: 'DELETE',
                url: '/feedback/' + id,
            }).then((response)=>{
                this.getCurrentRatingData();
            }).catch((error) => {
                alert('Error deleting!');
                console.log('Error deleting item', error);
            })
        }
    };
    }

render(){
    return (
                // <TableRow className={this.props.product} key={this.props.id}>
                //     <TableCell>{this.props.reviews.name}</TableCell>
                //     <TableCell>{this.props.reviews.fit}</TableCell>
                //     <TableCell>{this.props.reviews.style}</TableCell>
                //     <TableCell>{this.props.reviews.overall}<RatingSymbol /></TableCell>
                //     <TableCell><img src="" alt="product"></img></TableCell>
                // </TableRow>
                <TableRow className={this.props.products.flagged.toString()} key={this.props.i}>
                <TableCell>{this.props.products.name}</TableCell>
                <TableCell>{moment(this.props.products.date).format('MM/DD/YYYY')}</TableCell>
                <TableCell>{this.props.products.comments}</TableCell>
                <TableCell>{this.props.products.overall}</TableCell>
                <TableCell><img src="../../../../images/flag.svg" alt="feedback required icon" onClick={this.flagFeedback}></img></TableCell>
                {/* <TableCell><Delete onClick={this.handleDelete}/></TableCell> */}
            </TableRow>
        );
    }
}

const mapStoreToProps = (storage) => ({
    storage
});
export default connect(mapStoreToProps)(TableBodyComponent);