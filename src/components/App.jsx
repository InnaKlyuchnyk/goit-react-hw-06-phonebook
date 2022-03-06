import { useSelector, useDispatch } from "react-redux";
import {add} from '../redux/store'
import PhonebookList from './PhonebookList'
import Form from './Form'
import Section from './Section'
import Filter from './Filter'

export const App = () => {
  const contacts = useSelector(state => state.items)
  const dispatch = useDispatch()
  
  return (
    <div>
      <Section title='Phonebook'>
        <Form onSubmit={()=> dispatch(add())}></Form>
      </Section>

      <Section title='Contacts'>
        <Filter></Filter>
        <PhonebookList contacts={contacts}></PhonebookList>
      </Section>
      
    </div>
  );
};
