import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'components/redux/filter/filter-selectors';

import { deleteContact } from 'components/redux/contacts/contacts-slice';

import SvgIcon from '../SvgIcon/SvgIcon';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactList__item}>
          <p className={css.contactList__name}>{name}: </p>
          <p className={css.contactList__number}>{number}</p>
          <button
            className={css.contactList__deleteBtn}
            onClick={() => handleDeleteContact(id)}
          >
            <SvgIcon id="svg" />
          </button>
        </li>
      ))}
    </ul>
  );
}
