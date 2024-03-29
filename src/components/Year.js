import React from "react"

export default class Year extends React.Component {
  constructor(props) {
    super(props)
    this.onBtnClick = this.onBtnClick.bind(this)
  }

  onBtnClick(event) {
    this.props.setYearFn(event.target.textContent)
//  setYearFn назначена в App.js: <Year year={this.props.year} setYearFn={this.props.setYearFunction} />
  }

  render() {
    return <div>
      <button onClick={this.onBtnClick}>1975</button>
      <button onClick={this.onBtnClick}>1991</button>
      <button onClick={this.onBtnClick}>2015</button>
      <hr/>
      <b>This year has been chosen:</b> {this.props.year}
    </div>
  }
}