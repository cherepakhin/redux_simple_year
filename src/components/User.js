import React from "react"
export default class User extends React.Component {
  render() {
    return (
      <div>
        <b>Welcome to user:</b> {this.user}
        <br/>
        <br/>
      </div>
    );
  }
}