import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.name = this.name.bind(this);
    this.slogan = this.slogan.bind(this)
  }
  componentDidMount() {
    axios.get('http://localhost:3000')
      .then((data)=> this.setState({products: data}))
      .then(()=> console.log('this state', this.state));

  }
  // getProducts() {
  //   var results = [];
  //     results.push(fetch('http://52.26.193.201:3000/products/list/?page=id')
  //       .then(res => res.json())
  //     );
  // }
  render() {
    return (
      <div>
        <p>Hello World!</p>
      </div>
    );
  }
}


export default App;