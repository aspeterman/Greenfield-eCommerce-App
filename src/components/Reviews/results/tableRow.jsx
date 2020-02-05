import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TableCell, TableRow} from '@material-ui/core';
import RatingSymbol from '../ratingSymbol.jsx'


class TableBodyComponent extends Component {

render(){
    return (
                <TableRow className={this.props.product} key={this.props.id}>
                    <TableCell>{this.props.products.name}</TableCell>
                    <TableCell>{this.props.products.fit}</TableCell>
                    <TableCell>{this.props.products.style}</TableCell>
                    <TableCell>{this.props.products.overall}<RatingSymbol /></TableCell>
                    <TableCell><img src="" alt="product"></img></TableCell>
                </TableRow>
        );
    }
}
const mapStoreToProps = (storage) => ({
    storage
});
export default connect(mapStoreToProps)(TableBodyComponent);