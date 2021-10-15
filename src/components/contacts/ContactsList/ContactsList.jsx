import { connect } from 'react-redux';
import phonebookActions from '../../../redux/phonebook/phonebook-actions';

import { Button, List, Name, Item } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContacts }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Name>
          {name} : {number}
        </Name>
        <Button onClick={() => onDeleteContacts(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);

const mapStateToProps = state => {
  const { filter, items } = state.phonebook;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(phonebookActions.deleteName(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
