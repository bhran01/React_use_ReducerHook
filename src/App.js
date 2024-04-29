import { useReducer } from 'react';
import './App.css';


let oldState={
  value:0
}

let reducerFunction=(oldState,action)=>{
  switch(action.type){
    case 'ADD':
      return {...oldState,value:oldState.value+action.payload}
    case 'SUB':
      return {...oldState,value:oldState.value-action.payload}
    default :
      return oldState   
  }

}

function App() {
  const [newState,dispatch]=useReducer(reducerFunction,oldState)

  return (
    <div className="App">
      <h1>{newState.value}</h1>
      <button onClick={()=>{dispatch({type:"ADD",payload:5}) }}> + </button>
      <button onClick={()=>{dispatch({type:"SUB",payload:1}) }}> - </button>
      <button onClick={()=>{dispatch({type:"XXX",payload:1}) }}>Don't Click</button>
    </div>
  );
}

export default App;
