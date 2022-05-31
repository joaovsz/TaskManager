import Card from "../Card/Card";
import React from "react";
import "./ListItem.css";
import { useDispatch } from "react-redux";
import { deleteItem, changeDone } from '../../actions/list-actions'

function DoneImg(props) {
  if (props.done) {
    return <img alt="done" src="./on.png" id="off"></img>;
  } else {
    return <img alt="undone" src="./off.png" id="on"></img>;
  }
}


function ListItem(props) {
  const dispatch = useDispatch();
 
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div id="iconButtons">


          <button className="listButton" onClick={() => {dispatch(changeDone(props.item.id));}}
          >
            <DoneImg done={props.item.done}></DoneImg>
          </button>

          <button className="listButton" onClick={() => {dispatch(deleteItem(props.item.id));
            }}
          >
            <img src="./trash.png" id="trash"></img>
          </button>
        </div>
       
      </Card>
    </li>
  );
}

export default ListItem;
