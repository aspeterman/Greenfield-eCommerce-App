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

    // fetchReviews() {
    //     return dispatch => {
    //         dispatch(fetchReviewsPending());
    //         fetch('http://52.26.193.201:3000/reviews/list')
    //         .then(res => res.json())
    //         .then(res => {
    //       //       if(res.error) {
    //       //       // throw(res.error);
    //       //       console.log('error getting review data')
    //       //   }
    //     console.log(res)
    //         dispatch(fetchReviewsSuccess(res.reviews))
    //         return res.reviews;

    //     })
    //     .catch(error => {
    //         dispatch(fetchReviewsError(error));
    //     })
    //     }
    // }

    reviewHistory = () => {
        axios({
            method: 'GET',
            url: 'http://http//52.26.193.201:3000/reviews/:1/list'
        }).then((response) => {
            const reviewProductHistory = response.data;
            const action = {type: 'FETCH_REVIEWS', payload: reviewProductHistory};
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('Error setting review history', error);
        })
    }

    sortBy = (type) => {
        console.log('sort')
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
                    <TableCell><TableSortLabel onClick={()=> this.sortBy("meal")}>Product</TableSortLabel></TableCell>
                    <TableCell><TableSortLabel onClick={()=> this.sortBy("date")}>Date</TableSortLabel></TableCell>
                    <TableCell>Comments</TableCell>
                    <TableCell><TableSortLabel onClick={()=> this.sortBy("overall_rating")}>Overall Rating</TableSortLabel></TableCell>
                    <TableCell>Flag for Review</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {/* {this.props.storage.map((name, i)=>{
            return (
                <TableRowComponent i={i} name={name}/>
                    );
                })} */}
                {/* {this.props.name} */}
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
    fetchReviews
}, dispatch)

export default connect(mapStorageToProps, mapDispatchToProps)(TableComponent);
