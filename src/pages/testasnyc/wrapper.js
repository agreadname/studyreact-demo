import React, { Component } from 'react';
console.log("test import ")
class Testasnyc extends Component {
    render() {
      const Game1 = require('./index')//引入
        return (
          <Game1/>
        )
    }
};
export { Testasnyc }