import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import CotactsForm from './Contacts/ContactsForm';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import { Title, Container } from './Contacts/Title.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addName = (name, number) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newPerson = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newPerson, ...contacts],
    }));
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <CotactsForm onSubmit={this.addName} />
        <Title>Contacts</Title>
        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <ContactsList
          contacts={visibleContacts}
          onDeleteContacts={this.deleteContacts}
        />
      </Container>
    );
  }
}
