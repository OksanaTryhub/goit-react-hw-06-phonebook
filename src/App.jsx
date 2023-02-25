import Form from './components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import css from './App.module.css';

const App = () => (
  <div className={css.phonebook}>
    <h1 className={css.phonebook__title}> Phonebook</h1>
    <Form />
    <h2 className={css.phonebook__subtitle}>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);

export default App;
