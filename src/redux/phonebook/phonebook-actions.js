import { v4 as uuidv4 } from 'uuid';
import types from './phonebook-types';

const addName = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContacts = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export default { addName, deleteContacts };
