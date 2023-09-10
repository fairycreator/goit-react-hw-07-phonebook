import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, delContacts, getContacts } from '../../api/api';

export const getContactsThunk = createAsyncThunk(
  'contacts/allContacts',
  async (_, { reject }) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { reject }) => {
    try {
      const data = await addContacts(contact);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const delContactsThunk = createAsyncThunk(
  'contacts/delContact',
  async (id, { reject }) => {
    try {
      const data = await delContacts(id);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);
