import { createAction } from '@reduxjs/toolkit';

import shortid from 'shortid';

export const addContact = createAction('contacts/addContact', data => {
  return {
    payload: {
      ...data,
      id: shortid(),
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');
