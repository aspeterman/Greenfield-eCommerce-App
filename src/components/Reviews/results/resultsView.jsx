

import React, {Component} from 'react';
import TableComponent from './table.jsx';

class ResultsView extends Component {
    render(){
        return(
            <div className="form-view">
            <TableComponent/>
            </div>
        );
    }
}
export default ResultsView;