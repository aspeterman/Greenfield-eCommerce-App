// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Button, Dialog } from '@material-ui/core';

// class Review extends Component {
//     constructor() {
//         super();
//         this.state = {
//             examples: [{ image: 'Denim.jpg' }, { image: '' }],
//             open: false,
//             image: {image: ''},
//             selected: {image: ''},
//             input1: 'Review the product:',

//         }
//     }
//     handleClose = () => {
//         this.setState({
//             ...this.state,
//             open: false,
//             image: {image: ''}
//         })
//     }
//     handleChangeFor = (event, property) => {
//         this.setState({
//             ...this.state,
//             [property]: event.target.value,
//         });
//     }

//     selectProject = (example) => {
//         this.props.dispatch({ type: 'CHOOSE_PRODUCT', payload: example });
//         this.setState({
//             ...this.state,
//             selected: example
//         })
//     }
//     sendValueToStorage = () => {
//         const action = { type: '', payload: [this.state.input1] };
//         this.props.dispatch(action);

//     }

//     render() {
//         return (
//             <div className="main">
//                 <div>
//                     <div className="column-4 column-md-8">

//                         <div className="flex-box flex-evenly">
//                             {this.state.storage.product.products.map((ex, i) => {
//                                 return (
//                                     <div className="thumbnail" key={i}>
//                                         {this.state.selected === ex ? (<div className="flex-col selected-image">
//                                             <img src={this.props.state.product.products[ex].url} onClick={() => this.setState({ ...this.state, open: true, image: ex })} alt={`example-work-${i + 1}`} />
//                                             <Button onClick={() => this.selectProject('')}>undo</Button></div>) : (<div className="flex-col">
//                                                 <img src={this.props.state.product.products[ex].url} onClick={() => this.setState({ ...this.state, open: true, image: ex })} alt={`example-work-${i + 1}`} />
//                                             <Button color="secondary" onClick={() => this.selectProject(ex)}>select</Button></div>)}
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                         <Dialog open={this.state.open} onClose={this.handleClose}>
//                             <div className="dialog">
//                                 <div className="flex-box flex-end close-icon" onClick={this.handleClose}>x</div>
//  (<div><h3>Example photo</h3><img className="full-img" src={require(`../overall/${this.state.image.image}`)} alt="demo" /></div>)
//                             </div>
//                         </Dialog>

//                     </div>
//                     {this.state.selected.image.length !== 0 && <div className="instructions column-6 column-md-10 text-left">

//                         <div className="flex-col column-12">
//                             <input value={this.state.input1} onChange={(event) => this.handleChangeFor(event, 'input1')} required />
//                         </div>
//                         <div className="flex-box flex-center margin-top-15">
//                             <Button variant="contained" color="secondary" onClick={() => this.sendValueToStorage()}>Submit</Button>
//                         </div>


//                     </div>}
//                 </div>


//             </div>
//         );
//     }
// }
// const mapStoreToProps = (storage) => ({
//     storage
// });
// export default connect(mapStoreToProps)(Review);

