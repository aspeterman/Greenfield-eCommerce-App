import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog } from '@material-ui/core';
import Header from './Header';

class ProductView extends Component {
    constructor() {
        super();
        this.state = {
            tempProducts: [{image: 'Denim.jpg'}, {image:'Nike.jpg'}],
            open: false,
            image: {image: 'Denim.jpg'},
            viewProducts: false,
        }
    }
    handleClose = () => {
        this.setState({
            ...this.state,
            open: false,
            image: {image: 'Denim.jpg'}
        })
    }



    // toggle = () => {
    //   this.setState({
    //     viewProduct : !this.state.viewProduct
    //   });
    // }

    render() {

        return (
            <div className="main">
                <Header className={this.props.id} />
                <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-6 column-md-6">
                            <div className="flex-box flex-center">
                                <Button color="primary" variant="contained" onClick={() => this.setState({...this.state, viewProducts : true})}>View Products</Button>
                            </div>
                    </div>
                {this.state.viewProducts && <div className="flex-box flex-evenly column-4 column-md-8">
                <div><h2>Products</h2></div>
                    {this.state.tempProducts.map((ex, i) => {
                        return (
                            <div className="thumbnail" key={i}>
                                <img src={require(`./${ex.image}`)} onClick={() => this.setState({ ...this.state, open: true, image: ex })} alt={`products-${i + 1}`} />
                            </div>
                        )
                    })}
                </div>}

                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <div className="dialog">
                        <div className="flex-box flex-end close-icon" onClick={this.handleClose}>x</div>
                    <div><h3>photo</h3><img className="full-img" src={require(`./${this.state.image.image}`)} alt="demo"/></div>)}
                    </div>
              </Dialog>
                  </div>


                {this.state.viewProducts && <div className="flex-box flex-evenly">
                    <Button onClick={this.navigateBack}>Back</Button>

                    <Button color="primary" onClick={this.next}>Next</Button>
                </div>}
            </div>

        );
    }
}
const mapStoreToProps = (storage) => ({
    storage
});
export default connect(mapStoreToProps)(ProductView);