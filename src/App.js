import React from "react";
import List from "./components/List/List";
import TodoForm from "./components/Form/TodoForm";
import "./Todo.css";
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import listReducer from './reducers/listReducer.js'

function persistState(state){
  localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));

}

function loadState() {
  const actualState = localStorage.getItem(SAVED_ITEMS)
  if(actualState){
    return JSON.parse(actualState)
  } else{
    return []
  }
}

const SAVED_ITEMS = "savedItems"

const store = createStore(listReducer, loadState())

store.subscribe(()=>{
  persistState(store.getState())
})

function App() {

  return (
    <div className="container">
      {/*Store passada como parametro */}
      <Provider store={store}>
      <header><h1>TO DO</h1></header>
      {/* //Formulario recebendo uma função como propriedade */}
      <TodoForm ></TodoForm>
      <List></List>
      </Provider>
    </div> 
    
  );
}




export default App;
