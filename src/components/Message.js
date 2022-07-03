import React, { Component } from "react";

export class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Sebelum di ubah",
    };
  }

  ubahText() {
    this.setState({
      message: "Sesudah di ubah",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.ubahText()}>Klik</button>
      </div>
    );
  }
}
