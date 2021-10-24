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
        {this.state.dataApi.map(cont => {
          return(
            <div key={cont.id}>
              <p>{cont.firstName}</p>
              <p>{cont.lastName}</p>
              <p>{cont.age}</p>
              <hr />
            </div>
          )}
        )}
      </div>
    )
  }
}

export default App
