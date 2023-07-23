import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

//보내고자 하는 데이터를 명시해주기
//customer 변수를 만들기
const customers = [
  {
  'id':1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '유다연',
  'birthday' : '96122',
  'gender' : '여자',
  'job' : '대학생'
},
{
  'id':2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '나신입',
  'birthday' : '940702',
  'gender' : '남자',
  'job' : '직장인'
},
{
  'id':3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍길동',
  'birthday' : '031111',
  'gender' : '남자',
  'job' : '경찰'
}]

//화면 body를 담당하는 부분
//Component란 말 그대로 웹 문서에서 어떠한 내용을 보여주기 위한 기본적인 단위라고 생각하자
class App extends Component {
  render() {
    return (
    <div>
      {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gende={c.gender} job={c.job}/> ); })  }
    </div>
    );
  }
}

export default App;