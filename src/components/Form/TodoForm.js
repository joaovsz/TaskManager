import React, { useState } from 'react';
import "./TodoForm.css"
function TodoForm(props) {
    const [text, setText] = useState("");
  
    function handleChange(event) {
        // Pegando o valor do input e modificando o estado com "setText"
        let t = event.target.value;
        setText(t);
      }
    
      function addItem(event) {
        // Evita comportamento default de um botão de formulário
        event.preventDefault();
        //Condicional para evitar adição de tarefa sem texto
        if (text) {
            props.onAddItem(text)
            setText("");
        }
      }
    return( <form>
        {/* Value sendo text para zerar o valor do input ao adicionar */}
        <input className="description" type="text" onChange={handleChange} value={text}></input>
        <button id="addButton" onClick={addItem}>ADICIONAR</button>
      </form>)
}

export default TodoForm;
