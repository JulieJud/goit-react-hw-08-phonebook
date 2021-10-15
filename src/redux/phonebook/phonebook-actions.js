import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
import types from './phonebook-types';

export const addName = createAction(types.ADD, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const deleteName = createAction(types.DELETE);

export const changeFilter = createAction(types.CHANGE);

export default { addName, deleteName, changeFilter };
