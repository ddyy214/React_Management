import React from "react";
//React 컴포넌트는 일종의 라이브러리이자 클래스라고 할 수 있다.
//이것을 상속받아서 하나의 컴포넌트를 정의할 수 있는 것이다.
class Customer extends React.Component{
    render() {
        return(
       <div>
            <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
            <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
       </div>
       //결과적으로 Customer 클래스가 정의된 내용이 완전히 바뀌었다.
       //리액트 요소는 JSX란 문법을 이용해서 생성할 수 있다.
       //JSX의 특징은 내부 데이터가 이런식으로 두개 이상인 경우 반드시 div로 감싸서 사용을 해야된다.
        )
    }
}
//출력할 내용이 많다면 이를 적절히 구조화해서 분해할 필요가 있다. 따라서 기존의 Customer를 CustomerProfile과 CustomerInfo 두가지 요소로 구분하자 
//아래 클래스(컴포넌트)는 사용자의 id값과 이미지를 랜더링해주는 클래스다. 참고로 render가 들어가면 return은 필수임
// <img src={this.props.image} alt="profile"/> 여기서 alt 값을 넣어줘야하는데 시각장애인들을 위한 옵션임
class CustomerProfile extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

//이제 하나의 고객에 대한 남은 정보를 출력하도록 해주는 CustomerInfo 컴포넌트를 만든다.
class CustomerInfo extends React.Component {
    render() {
        return (
            <di>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </di>
        )
    }
}

export default Customer;


//props 같은 경우에는 기본적으로 React.Component가 포함하고 있는 내용이다.
//그렇기 때문에 디스 키워드를 이용해서 this.props.name을 써야함
//컴포넌트 내용을 적절히 분해하면 관리하기가 쉬워지며 생산성 또한 높아진다는 특징이 있다.