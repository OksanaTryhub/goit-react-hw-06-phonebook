export const getFilter = store => store.filter;

export const getFilteredContacts = store => {
  const normalizedFilter = store.filter.toLocaleLowerCase();

  return store.contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
};
