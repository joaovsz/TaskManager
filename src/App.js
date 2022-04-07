import React, { useState, useEffect } from "react";
import List from "./components/List/List";
import TodoForm from "./components/Form/TodoForm";
import Item from './components/Item'
import "./Todo.css";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import listReducer from './reducers/listReducer'

const store = createStore(listReducer)


const SAVED_ITEMS = "savedItems"


function Todo() {
  // const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if (savedItems) {
      setItems(savedItems);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
  }, [items]);
  
  // function onAddItem(text) {
  //   let it = new Item(text);

  //   setItems([...items, it]);
  // }

  // function onItemDeleted(item) {
  //   // Apagando um item da lista
  //   let filteredItems = items.filter(it => it.id != item.id)
  //   setItems(filteredItems)
  // }

  // function onDone(item) {
  //   let updatedItems = items.map(it => {
  //     if (it.id === item.id) {
  //       it.done = !it.done
  //     }
  //     return it
  //   })
  //   setItems(updatedItems)
  // }

  return (
      <>
      <header>
        <h1>TO DO</h1>
      </header>
      
    <div className="container">
      <Provider store={store}>
      {/* //Formulario recebendo uma função como propriedade */}
      <TodoForm ></TodoForm>
      <List onDone={onDone}></List>
      </Provider>
    </div> 
    </>
  );
}




export default Todo;
