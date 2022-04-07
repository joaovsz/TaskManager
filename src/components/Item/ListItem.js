import Card from "../Card/Card";
import React from "react";
import "./ListItem.css"

function DoneImg(props) {
  if (props.done) {
    return <img alt="done" src="./on.png" id="off"></img>;
  } else {
    return <img alt="undone" src="./off.png" id="on"></img>;
  }
}

function ListItem(props) {
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button className="listButton"
            onClick={() => {
              props.onDone(props.item);
            }}
          >
            <DoneImg done={props.item.done}></DoneImg>
          </button>
          <button className="listButton"
            onClick={() => {
              props.onItemDeleted(props.item);
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
