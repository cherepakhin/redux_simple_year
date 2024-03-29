import React, { Component } from 'react';
import './App.css';
import User from '../components/User';
import Year from '../components/Year';
import setYearAction from '../actions/actionYear';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <User user={this.props.userProp} />
        <Year year={this.props.yearProp} setYearFn={this.props.setYearFunction} /> {/*setYearFunction see in mapDispatchToProps*/}
      </div>
    );
  }
}

function mapStateToProps(state) { // перенос из state в this.props....
    return {
        props: state // "year:" внутри компонета доступно через this.props.year
    }
}

function mapDispatchToProps(dispatch) {
  return {
    // определяется функция setYearFunction для использования ВНУТРИ компонента.
    //См. App.render() ( ... <Year ... setYearFn={this.props.setYearFunction} />...)
    setYearFunction: valYearProp => {
      dispatch(setYearAction(valYearProp)) // ПЕРЕДАЮТСЯ изменения данных в STATE(!) ПРИЛОЖЕНИЯ(!) через ф-ю dispatch
      // actions/actionYear/setYearAction() - функция
      // возращает объект "команду с данными" {type: "SET_YEAR", payload: year} для выполнения в Redux (info.js):
      //        export default function userInfo (state = initialState,  action) {
      //            switch (action.type) {
      //                case "SET_YEAR":
      //                  return {...state, year: action.payload}
      //                default:
      //                  return state
      //            }
      // название файла info.js и имена функции userInfo() выбирается произвольно
      // привязка функции userInfo() (а это обработчик события) сделана в redusers/index.js
        // import { combineReducers } from "redux"
        // import userInfo from "./info"
        //
        // const rootReducer = combineReducers({
        //   userInfo
        // })
        //export default rootReducer;
        // combineReducers собирает в один switch отдельные редюссеры (обработчики событий) ACTIONs

      // dispatch() меняет state приложения данными полученными из setYearAction()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);