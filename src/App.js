import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from "react-redux";
import {increment, decrement } from "./redux/action/counter";

function App() {
  const counter = useSelector ((state) => state.counter);
  const dispatch = useDispatch ();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WEB BELAJAR HITUNG
        </p>
        <button onClick={() => dispatch(increment())}>tambah</button>
        <button onClick={() => dispatch(decrement())}>kurang</button>
        ini nilai: {counter.value}
      </header>
    </div>
  );
}

export default App;
