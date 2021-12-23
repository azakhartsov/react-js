import { createSlice } from "@reduxjs/toolkit";

export const taskReducerSlice = createSlice({
  name: "store",
  initialState: {
    value: 0,
    text: "privet",
  },
  reducers: {
    add: (state, data) => {
      state.value += +data.payload;
    },
    minus: (state, data) => {
      state.value -= +data.payload;
    },
    multi: (state, data) => {
      state.value *= +data.payload;
    },
    division: (state, data) => {
      state.value /= +data.payload;
    },
    text: (state, data) => {
      state.text = data.payload;
    },
  },
});

export const {
  add,
  minus,
  multi,
  division,
  text,
  showConsole,
} = taskReducerSlice.actions;

export const selectValue = (state) => state.taskReducer.value;
export const selectText = (state) => state.taskReducer.text;

export default taskReducerSlice.reducer;
