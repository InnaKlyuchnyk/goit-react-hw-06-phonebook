import { useSelector, useDispatch } from "react-redux";
import {add} from '../redux/contacts/reducer'
import PhonebookList from './PhonebookList'
import Form from './Form'
import Section from './Section'
import Filter from './Filter'

export const App = () => {
  const contacts = useSelector(state => state.items)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

    const getFiltredNames = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  return (
    <div>
      <Section title='Phonebook'>
        <Form onSubmit={()=> dispatch(add())}></Form>
      </Section>

      {contacts.length !== 0 &&
        <Section title='Contacts'>
        <Filter/>
        <PhonebookList contacts={contacts} filtredNames={getFiltredNames()}></PhonebookList>
      </Section>}
      
    </div>
  );
};
