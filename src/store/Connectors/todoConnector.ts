import {RootState} from "../index.ts";
import {addElement, deleteElement} from "../Reducers/todoReducer.ts";
import {connect, ConnectedProps} from "react-redux";

const mapState = (state: RootState) => ({
  elements: state.todo.elements,
  size: state.todo.size
})

const mapDispatch = {
  addElement,
  deleteElement
}

const connector = connect(mapState, mapDispatch);

export default connector;
export type PropsFromRedux = ConnectedProps<typeof connector>;