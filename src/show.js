import React from 'react';


class show extends React.Component {

render() {
  return (
      <div>
          <table className="table table-inverse">
          <thead>
            <tr>
              <th>Numeris</th>
              <th>Pavadinimas</th>
              <th>Konsentracija</th>
              <th>Kartumas</th>
              <th>Spalva</th>
            </tr>
          </thead>
          <tbody>
          {this.props.beers}
          </tbody>
          </table>
        </div>
    );
  }
}

export default show;
