import React, { useState } from "react";
import "./TodoForm.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions/listActions";

function TodoForm() {
  
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleChange(event) {
    // Pegando o valor do input e modificando o estado com "setText"
    let t = event.target.value;
    setText(t);
  }

  function addItemEvent(event) {
    // Evita comportamento default de um botão de formulário
    event.preventDefault();
    //Condicional para evitar adição de tarefa sem texto
    if (text) {
      dispatch(addItem(text));
      setText("");
    }
  }
  return (
    <form>
      {/* Value sendo text para zerar o valor do input ao adicionar */}
      <input
        className="description"
        type="text"
        onChange={handleChange}
        value={text}
      ></input>
      <button id="addButton" onClick={addItemEvent}>
        ADICIONAR
      </button>
    </form>
  );
}

export default TodoForm;
