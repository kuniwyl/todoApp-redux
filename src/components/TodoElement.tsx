import {useAppDispatch} from "../store/hooks.ts";
import {deleteElement} from "../store/Reducers/todoReducer.ts";

interface ITodoElementProps {
  id: number,
  name: string,
}

const TodoElement = (props: ITodoElementProps) => {
  const dispatcher = useAppDispatch();

  return (
    <div className="todoElement">
      <span className="name">
        {props.id}: {props.name}
      </span>
      <span 
        className="delete"
        onClick={() => dispatcher(deleteElement(props.id))}
      >
        Zakończ
      </span>
    </div>
  )
}

export default TodoElement;