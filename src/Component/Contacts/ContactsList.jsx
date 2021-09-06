
const ContactsList = ({ contacts}) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>
          {name} : {number}
        </span>
      
      </li>
    ))}
  </ul>
);



export default ContactsList