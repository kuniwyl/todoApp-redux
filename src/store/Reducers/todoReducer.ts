import {ITodoElement, TodoElement} from "../../model/TodoElement.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodoReducer {
  elements: Array<ITodoElement>,
  size: number,
}

const initialState: TodoReducer = {
  elements: [],
  size: 0,
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<string>) => {
      const element = new TodoElement(state.size, action.payload, false);
      state.size += 1
      state.elements.push(element)
    },
    deleteElement: (state, action: PayloadAction<number>) => {
      state.elements = state.elements.filter(e => e.id != action.payload)
    }
  }
})

export default todoSlice.reducer;
export const { addElement, deleteElement } = todoSlice.actions;