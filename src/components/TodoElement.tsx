import {useAppDispatch} from "../store/hooks.ts";
import {deleteElement} from "../store/Reducers/todoReducer.ts";

interface ITodoElementProps {
  id: number,
  name: string,
}

const TodoElement = (props: ITodoElementProps) => {
  const dispatcher = useAppDispatch();

  return (
    <div>
      <span>
        {props.id}: {props.name}
      </span>
      <span style={{margin: "20px"}} onClick={() => dispatcher(deleteElement(props.id))}>
        Zakończ
      </span>
    </div>
  )
}

export default TodoElement;