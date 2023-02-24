import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

import shortid from 'shortid';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: shortid(),
      ...payload,
    },
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};
