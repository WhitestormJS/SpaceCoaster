import React, {Component} from 'react';
import {Logo} from './logo';

export class SpaceCoaster extends Component {
  render() {
    return (
      <main className="container">
        <Logo/>
        <button className="main-btn">Start</button>
      </main>
    );
  }
}
