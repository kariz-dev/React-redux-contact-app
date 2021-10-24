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
              <img style={{borderRadius: '100%', height: '150px', width: '150px', objectFit: 'cover'}} src={cont.photo} alt={cont.firstName} />
              <p>Name : {cont.firstName+' '+cont.lastName}</p>
              <p>Age : {cont.age}</p>
              <hr />
            </div>
          )}
        )}
      </div>
    )
  }
}

export default App
