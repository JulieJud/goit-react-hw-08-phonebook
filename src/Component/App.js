import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import CotactsForm from './Contacts/ContactsForm.jsx';
import ContactsList from './Contacts/ContactsList';

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
    const newPerson = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newPerson, ...contacts],
    }));
  };

  render() {
    return (
      <div>
        <title>Phonebook</title>
        <CotactsForm onSubmit={this.addName} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
