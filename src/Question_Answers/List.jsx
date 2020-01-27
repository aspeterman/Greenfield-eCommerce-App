import React, { Component } from 'react'
import { connect } from 'react-redux';

// import Search from '../Search'
// import List from '../List'
// import Modal from '../Modal'
// import {useSelector} from 'react-redux'


class List extends Component {
    render() {
    //  const reactState = useSelector(state => state)
        return (
            
        <div>
          <p>list</p>
          <p>{this.state? this.state.reviews: null}</p>
        </div>
        )
    }
}
export default List;