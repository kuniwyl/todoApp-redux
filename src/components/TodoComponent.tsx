import {ITodoElement} from "../model/TodoElement.ts";
import connector, {PropsFromRedux} from "../store/Connectors/todoConnector.ts";
import {useState} from "react";
import TodoElement from "./TodoElement.tsx";
import Input from "./Input.tsx";

interface TodoComponentProps extends PropsFromRedux {
  elements: Array<ITodoElement>,
  size: number
}

const TodoComponent = (props: TodoComponentProps) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleAddElement = () => {
    if (text.length == 0) {
      setError("Element nie może być pusty")
      return;
    }
    props.addElement(text);
    setText("");
    setError("");
  }

  return (
    <>
      <div>
        <Input label={"Wprowadź todo"} text={text} setText={setText} error={error} />
      </div>
      <div>
        <button onClick={() => handleAddElement()}>Dodaj</button>
      </div>
      <div>
        {props.elements.map(element =>
          <TodoElement key={element.id} id={element.id} name={element.name} />
        )}
      </div>
    </>
  )
}

export default connector(TodoComponent);