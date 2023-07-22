import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//화면 body를 담당하는 부분
class App extends Component {
  render() {
  return (
    <div className="gray-background">
      <img src={logo} lat="logo" />
      <h2>Let's develop management system!</h2>
    </div>
  );
}
}

export default App;
