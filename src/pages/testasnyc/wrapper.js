import React, { Component } from 'react';

class Testasnyc extends Component {
    render() {
      const Game1 = require('./index')
        return (
          // <div>{Game1}</div>
          <Game1/>
        )
    }
};
export { Testasnyc }