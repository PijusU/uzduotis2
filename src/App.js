import React from 'react';
import axios from 'axios';
import Show from './show';
import _ from 'lodash';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      beers: []
    };
  }

  componentWillMount() {
    var config = {
      headers: {'Authorization': 'VerySecretToken'}
    };
    axios.get('http://localhost:8000/beer', config)
  .then((response) => {
    console.log(response.data);
    this.setState({ beers: (response.data.items) });

  });
}
  render() {

    const beers = _.sortBy(this.state.beers, 'alc').map((beer, i) => {
    return (<tr key={i}>
      <td>{beer.id}</td>
      <td>{beer.name}</td>
      <td>{beer.alc}</td>
      <td>{beer.bitterness}</td>
      <td>{beer.color}</td>
      </tr>
  );
});

    return (
      <Show beers={beers}/>
    );
  }
}

export default App;
