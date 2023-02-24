import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const contanctsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => [...state, payload],
      prepare: data => {
        return {
          payload: {
            id: shortid(),
            ...data,
          },
        };
      },
    },

    deleteContact: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export const { addContact, deleteContact } = contanctsSlice.actions;
export default contanctsSlice.reducer;
