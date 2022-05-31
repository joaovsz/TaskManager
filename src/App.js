import React from "react";
import List from "./components/List/List";
import TodoForm from "./components/Form/Todo-form";
import "./Todo.css";
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import listReducer from './reducers/list-reducer.js'

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

  return (<>
  
  <header><h1>TO DO</h1></header>
    <div className="container">
      {/*Store passada como parametro */}
      <Provider store={store}>
      <TodoForm ></TodoForm>
      {/* //Formulario recebendo uma função como propriedade */}
      <List></List>
      </Provider>
    </div>   
  </>
  );
}




export default App;
