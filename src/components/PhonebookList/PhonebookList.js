import { remove } from '../../redux/contacts/reducer';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PhonebookList.module.css';

function PhonebookList() {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getFiltredNames = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDelete = event => {
    event.preventDefault();
    const deleteContact = event.currentTarget.id;
    dispatch(remove(deleteContact));
  };

  return (
    <ul className={styles.list}>
      {getFiltredNames().map(contact => (
        <li key={contact.id} className={styles.listItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            id={contact.id}
            onClick={onDelete}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PhonebookList;
