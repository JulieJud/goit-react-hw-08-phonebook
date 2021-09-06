
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContacts }) => (
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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
    }),
  ),
  onRemove: PropTypes.func,
};