import { createReducer, createAction } from '@reduxjs/toolkit';

export const filter = createAction('filter');

export const filterReducer = createReducer('', {
  [filter]: (state, action) => (state = action.payload),
});
