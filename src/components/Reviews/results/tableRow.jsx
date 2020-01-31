import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TableCell, TableRow} from '@material-ui/core';

class TableBodyComponent extends Component {

render(){
    return (
                <TableRow className={this.props.product.flagged.toString()} key={this.props.id}>
                    <TableCell>{this.props.product.name}</TableCell>
                    <TableCell>{this.props.product.fit}</TableCell>
                    <TableCell>{this.props.product.style}</TableCell>
                    <TableCell>{this.props.product.overall}</TableCell>
                    <TableCell><img src="" alt="product-image"></img></TableCell>
                </TableRow>
        );
    }
}
const mapStoreToProps = (storage) => ({
    storage
});
export default connect(mapStoreToProps)(TableBodyComponent);