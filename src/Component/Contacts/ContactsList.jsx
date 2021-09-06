
const ContactsList = ({ contacts,onDeleteContacts}) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>
          {name} : {number}
            </span>
            <button onClick={() => onDeleteContacts(id)}>Delete</button>
      
      </li>
    ))}
  </ul>
);



export default ContactsList