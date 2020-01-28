import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {TableCell, TableRow} from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import moment from 'moment';

class TableBodyComponent extends Component {
    componenTableCellidMount(){
        this.getCurrentRatingData();
    }
    // getCurrentRatingData gets all data without sorting
    getCurrentRatingData = () => {
    axios({
        method: 'GET',
        url: '/review'
    }).then((response) => {
        const ratings = response.data;
        const action = {type: 'SET_HISTORY', payload: ratings};
        this.props.dispatch(action);
    }).catch((error) => {
        console.log('Error getting current ratings data', error);
    })
} // gets the latest ratings data, dispatches that to the redux store
    flagReview = () => {
        console.log('calc rating');
        let id = this.props.product.id;
        axios({
            method: 'PUT',
            url: '/review/' + id,
        }).then((response) => {
            this.getCurrentRatingData();
        }).catch((error) => {
            console.log(error);
        })
    }
    handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${this.props.product.review}?`)){
            let id = this.props.product.id;
            axios({
                method: 'DELETE_REVIEW',
                url: '/review/' + id,
            }).then((response)=>{
                this.getCurrentRatingData();
            }).catch((error) => {
                alert('Error deleting!');
                console.log('Error deleting item', error);
            })
        }
    }

render(){
    return (
                <TableRow className={this.props.product.flagged.toString()} key={this.props.i}>
                    <TableCell>{this.props.product.name}</TableCell>
                    <TableCell>{moment(this.props.product.date).format('MM/DD/YYYY')}</TableCell>
                    <TableCell>{this.props.product.review}</TableCell>
                    <TableCell>{this.props.product.overall_rating}</TableCell>
                    <TableCell><Delete onClick={this.handleDelete}/></TableCell>
                </TableRow>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TableBodyComponent);