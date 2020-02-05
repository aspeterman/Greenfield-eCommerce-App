import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableRowComponent from './tableRow.jsx';
import {Table, TableBody, TableHead, TableSortLabel, TableCell, TableRow, Grid} from '@material-ui/core';
import axios from 'axios';
import { bindActionCreators } from 'redux';

import fetchReviews from '../../../actions/fetchReviews.js';
import {getReviewsError, getReviews, getReviewsPending} from '../../../reducers/reviewReducer.js';

const toggleOrder = {toggle: false};


class TableComponent extends Component {
    componentDidMount(){
        // this.fetchReviews();
    }

    // reviewHistory = () => {
    //     axios({
    //         method: 'GET',
    //         url: '/http://http//52.26.193.201:3000//reviews/:product_id/list'
    //     }).then((response) => {
    //         const reviewProductHistory = response.data;
    //         const action = {type: 'FETCH_REVIEWS', payload: reviewProductHistory};
    //         this.props.dispatch(action);
    //     }).catch((error) => {
    //         console.log('Error setting review history', error);
    //     })
    // }

    sortBy = (type) => {
        toggleOrder.toggle = !toggleOrder.toggle;
        axios({
            method: 'PUT',
            url: `/sort?type=${type}`,
            data: toggleOrder
        }).then((response) => {
            const sortedRatings = response.data;
            const action = {type: 'FETCH_REVIEWS', payload: sortedRatings};
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('Error sorting ratings data', error);
        })
    }



    selectProduct = (example) => {
        this.props.dispatch({ type: 'CHOOSE_PRODUCT', payload: example });
        this.setState({
            ...this.state,
            selected: example

        })
    }

    loadReviews = () => {
        let action = {type: 'FETCH_REVIEWS', payload: this.props}
        console.log(this.fetchReviews)
        this.props.dispatch(action)
    }
    render(){
        return(
        <Grid container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("name")}>Name</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("fit")}>Fit</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("style")}>Style</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("overall")}>Overall Rating</TableSortLabel></TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {/* {this.props.storage.reviewHistory.map((product, i)=>{
                return (
                    <TableRowComponent i={i} product={product}/>
                        );
                    })} */}
                </TableBody>
            </Table>
            {this.fetchReivews()}
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

export default connect(mapDispatchToProps)(TableComponent);
