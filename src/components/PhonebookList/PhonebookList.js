function PhonebookList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" id={contact.id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PhonebookList;
