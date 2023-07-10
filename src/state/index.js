import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  notes: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setNotes: (state, action) => {
      state.notes = action.payload.notes;
    },
    setNote: (state, action) => {
      const updatedNotes = state.notes.map((note) => {
        if (note._id === action.payload.note._id) {
          return action.payload.note;
        }
        return note;
      });
      state.notes = updatedNotes;
    },
  },
});

export const { setMode, setLogin, setLogout, setNotes, setNote } =
  authSlice.actions;
export default authSlice.reducer;
