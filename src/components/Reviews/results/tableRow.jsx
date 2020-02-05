import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TableCell, TableRow} from '@material-ui/core';
import RatingSymbol from '../ratingSymbol.jsx'


class TableBodyComponent extends Component {

render(){
    return (
                <TableRow className={this.props.product} key={this.props.id}>
                    <TableCell>{this.props.reviews.name}</TableCell>
                    <TableCell>{this.props.reviews.fit}</TableCell>
                    <TableCell>{this.props.reviews.style}</TableCell>
                    <TableCell>{this.props.reviews.overall}<RatingSymbol /></TableCell>
                    <TableCell><img src="" alt="product"></img></TableCell>
                </TableRow>
        );
    }
}
const mapStoreToProps = (storage) => ({
    storage
});
export default connect(mapStoreToProps)(TableBodyComponent);