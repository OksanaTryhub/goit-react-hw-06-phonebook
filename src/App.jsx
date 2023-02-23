import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from 'components/redux/actions';
import {
  getAllContacts,
  getFilter,
  getFilteredContacts,
} from 'components/redux/selectors';

import Form from './components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import warningMessage from './utils/warningMessage';
// import useLocalStorage from 'hooks/useLocalStorage';

import css from './App.module.css';

export default function App() {
  const contacts = useSelector(getAllContacts);

  const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normalizedNewContactName = name.toLocaleLowerCase();

    const result = contacts.find(({ name }) => {
      return name.toLocaleLowerCase() === normalizedNewContactName;
    });

    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name)) {
      warningMessage(name);
      return;
    }
    const action = addContact({ name, number });
    dispatch(action);
  };

  const cangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const handleDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <div className={css.phonebook}>
      <h1 className={css.phonebook__title}> Phonebook</h1>
      <Form onSubmit={handleAddContact} />
      <h2 className={css.phonebook__subtitle}>Contacts</h2>
      <Filter value={filter} onChange={cangeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
