import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableRowComponent from './tableRow.jsx';
import {Table, TableBody, TableHead, TableSortLabel, TableCell, TableRow, Grid} from '@material-ui/core';
import axios from 'axios';

const toggleOrder = {toggle: false};
class TableComponent extends Component {

    componentDidMount(){
        this.getProductReviewHistory();
        }
    getProductReviewHistory = () => {
        axios({
            method: 'GET',
            url: '/review'
        }).then((response) => {
            const productReviewHistory = response.data;
            const action = {type: 'SET_HISTORY', payload: productReviewHistory};
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('Error setting product review history', error);
        })
    }
    sortBy = (type) => {
        toggleOrder.toggle = !toggleOrder.toggle;
        axios({
            method: 'PUT',
            url: `/sort?type=${type}`,
            data: toggleOrder
        }).then((response) => {
            const sortedRatings = response.data;
            const action = {type: 'SET_HISTORY', payload: sortedRatings};
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('Error sorting ratings data', error);
        })
    }

    render(){
        return(
        <Grid container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("name")}>Name</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("product")}>Product</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("date")}>Date</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("overall_rating")}>Overall Rating</TableSortLabel></TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.reduxStore.productReviewHistory.map((product, i)=>{
                return (
                    <TableRowComponent i={i} product={product}/>
                        );
                    })}
                </TableBody>
            </Table>
            </Grid>

        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TableComponent);
