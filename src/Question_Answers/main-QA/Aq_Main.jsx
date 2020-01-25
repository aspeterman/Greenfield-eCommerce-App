const React = require('react')
import Search from '../Search'
import List from '../List'
import Modal from '../Modal'

class Aq_Main extends React.Component {
    constuctor(props) {
        super(props);
    }
    render() {
        return (
            
        <div>
            <h1>Questions and answers</h1>
            <Search/>
            <List/>
            <container>
                    <Modal/>
                    <button>more answered questions</button>
             </container>

        </div>


        )
    }
}
export default Aq_Main;