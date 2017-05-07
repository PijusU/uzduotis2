import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    var config = {
      headers: {'Authorization': 'VerySecretToken'}
    };
    axios.get('http://localhost:8000/beer', config)
  .then(function(response){
    console.log(response);
    console.log(response.data);
    console.log(response.status);
  });

}

  render() {
    //const beers = this.state.beers.map((beer) => <li>{beer}</li> );
    return (
      <div>
        <h1>Beers :</h1>
        <ul>

        </ul>
      </div>
    );
  }
}

export default App;
