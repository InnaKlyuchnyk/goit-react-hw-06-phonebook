import { filter } from '../../redux/filter/reducer';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const value = event.currentTarget.value;
    dispatch(filter(value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleFilterChange}
      />
    </label>
  );
}
