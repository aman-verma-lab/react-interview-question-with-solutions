import  React from 'react';
import './App.css';
import Todo from './Components/Todo';
import Add from './Components/Add';
import withCounter from './Hoc/withCounter';
import UnControlledComponent from './Hooks/unControlledComponent';
import Memorization from './Hooks/Memorization';
import UserDataProvider from './Hooks/userProvider';
import Home from './Hooks/Home';

function App(props) {
  return (
    <div className="App">
        <UserDataProvider>
          {/* SumHoc */}
          <p>Sum Hoc</p>
          <p>Add : {Add}</p>
          <hr />
          {/* CounterHoc */}
          <p>Counter Hoc</p>
          <p>Counter: {props.count}</p>
          <button onClick={props.increment}>Increment</button>
          <button onClick={props.decrement}>Decrement</button>
          <hr />
          {/* Ref */}
          <p>Un Controlled Component</p>
          <p><UnControlledComponent /></p>
          <hr />
          {/* Memorization */}
          <p>Memorization</p>
          <Memorization />
          <hr />
          <Todo />
          <hr />
          {/* <Home /> */}
          </UserDataProvider>
    </div>
  );
}

export default withCounter(App);
