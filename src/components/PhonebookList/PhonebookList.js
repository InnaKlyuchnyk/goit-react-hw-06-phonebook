import { remove } from '../../redux/contacts/reducer';
import { useDispatch } from 'react-redux';
import styles from './PhonebookList.module.css';

function PhonebookList({ filtredNames }) {
  const dispatch = useDispatch();

  const onDelete = event => {
    event.preventDefault();
    const deleteContact = event.currentTarget.id;
    dispatch(remove(deleteContact));
  };

  return (
    <ul className={styles.list}>
      {filtredNames.map(contact => (
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
