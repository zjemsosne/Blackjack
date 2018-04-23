import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class Apps extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }

    render() {
      return (
        <div>
          <h1>Test</h1>
        </div>
      )
    }
  }

  ReactDOM.render(
    <Apps />,
    document.getElementById('app'),
  );

});
