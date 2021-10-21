import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactAPI from '../../service/contacts-api';

export const fetchContactsAction = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactAPI.fetchContacts();
    return contacts;
  },
);

export const addContactAction = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    const data = await contactAPI.addContacts(contact);
    return data;
  },
);

export const deleteContactAction = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    await contactAPI.deleteContacts(id);
    return id;
  },
);
