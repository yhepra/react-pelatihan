import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggenIn: true,
    };
  }

  render() {
    // return (
    //   <div>
    //     <div>Welcome Yoga</div>
    //     <div>Welcome Tamu</div>
    //   </div>
    // );

    // ====================================
    // if (this.state.isLoggenIn) {
    //   return <div>Welcome Yoga</div>;
    // } else {
    //   return <div>Welcome Tamu</div>;
    // }
    // =======================================

    // let message;
    // if (this.state.isLoggenIn) {
    //   message = <div>Welcome Yoga</div>;
    // } else {
    //   message = <div>Welcome Tamu</div>;
    // }

    // return <h1>{message}</h1>;
    // ========================= TERNARY
    // return this.state.isLoggenIn ? (
    //   <div>Welcome Yoga</div>
    // ) : (
    //   <div>Welcome Tamu</div>
    // );
    // ===========================
    return this.state.isLoggenIn || <div>Welcome Yoga</div>;
  }
}

export default UserGreeting;
