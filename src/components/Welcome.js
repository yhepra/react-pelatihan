import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // const {state1, state 2} = this.state
    return (
      <div>
        <h1>
          Welcome {name} a.k.a {heroName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
