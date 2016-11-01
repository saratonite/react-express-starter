import React,{Component} from 'react';

import Menu from './Menu';
export default class App extends React.Component {

  render(){
    return(
      <div >
        <h1>Hello World </h1>
        <Menu/>
        {this.props.children}
      </div>
    )
  }
}
