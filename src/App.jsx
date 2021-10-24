import axios from 'axios';
import React, { Component } from 'react';

const api = 'https://simple-contact-crud.herokuapp.com';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      dataApi:[],
      response: ''
    }
  }

  componentDidMount(){
    
      // Axios
      axios.get(api+'/contact')
        .then(res => {
          this.setState({
            dataApi:res.data.data
          })
        }
      )
  }

  render() {
    return (
      <div>
        <h1>API</h1>
        {this.state.dataApi.map((dat, index) => {
          return(
            <div key={index}>
              <p>{dat.firstName}</p>
              <p>{dat.lastName}</p>
              <p>{dat.age}</p>
              <hr />
            </div>
          )}
        )}
      </div>
    )
  }
}

export default App
