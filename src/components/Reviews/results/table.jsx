import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableRowComponent from './tableRow.jsx';
import {Table, TableBody, TableHead, TableSortLabel, TableCell, TableRow, Grid} from '@material-ui/core';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import fetchReviews from '../../../actions/fetchReviews.js';
import {fetchReviewsPending, fetchReviewsSuccess, fetchReviewsError} from '../../../actions/actions.js';

const toggleOrder = {toggle: false};


class TableComponent extends Component {

    componentDidMount(){
        // this.reviewHistory();
        fetchReviews()
    }




    selectProduct = (example) => {
        this.props.dispatch({ type: 'CHOOSE_PRODUCT', payload: example });
        console.log('selected')
        this.setState({
            ...this.state,
            selected: example

        })
    }

    loadReviews = () => {
        let action = {type: 'FETCH_REVIEWS', payload: this.props}
        console.log(this.props)
        this.props.dispatch(action)
    }

render(){
    return(
    <Grid>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><TableSortLabel onClick={()=> this.sortBy("name")}>Name</TableSortLabel></TableCell>
                    <TableCell><TableSortLabel onClick={()=> this.sortBy("product")}>Product</TableSortLabel></TableCell>
                    <TableCell><TableSortLabel onClick={()=> this.sortBy("recommended")}>recommended</TableSortLabel></TableCell>
                    <TableCell>Comments</TableCell>
                    <TableCell><TableSortLabel onClick={()=> this.sortBy("rating")}></TableSortLabel></TableCell>
                    <TableCell>Flag for Review</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.review.map((rating, i)=>{
            return (
                <TableRowComponent i={i} rating={rating}/>
                    );
                })}
                {/* {this.props.rreview.rating} */}
            </TableBody>
        </Table>
        </Grid>

    );
}
}
// const mapStoreToProps = state => ({
//     error: getReviewsError(state),
//     reviews: getReviews(state),
//     pending: getReviewsPending(state)
// })

const mapStorageToProps = (storage) => ({
    storage
});

const mapDispatchToProps = dispatch => bindActionCreators({
    review: fetchReviews
}, dispatch)

export default connect(mapStorageToProps, mapDispatchToProps)(TableComponent);
