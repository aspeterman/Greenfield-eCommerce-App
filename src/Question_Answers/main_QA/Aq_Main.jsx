// const React = require('react')
import React, { Component } from 'react'

import Search from '../Search'
import List from '../List'
 import Modal from '../Modal'
// import {useSelector} from 'react-redux'


class Aq_Main extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
    //  const reactState = useSelector(state => state)
        return (
            
        <div>
            <h1>Questions and answers</h1>
            {/* <p>this is state:{reactState}</p> */}
            <Search/>
            <List/>
            <div>
                <Modal/>
                    <button>more answered questions</button>
             </div>

        </div>


        )
    }
}
export default Aq_Main;