import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CotactsForm from '../contacts/ContactsForm/ContactsForm';
import ContactsList from '../contacts/ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { Title, Container } from './App.styled';

export default function App() {
  //const [contacts, setContacts] = useState([
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //]);

  //const [filter, setFilter] = useState('');

  // useEffect(() => {
  //  const currentContacts = JSON.parse(localStorage.getItem('contacts')) ?? '';
  // currentContacts && setContacts(currentContacts);
  //}, []);

  //useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addName = (name, number) => {
  //  const condition = contacts.find(
  //    contact => contact.name.toLowerCase() === name.toLowerCase(),
  //  );

  // if (condition) {
  //   alert(`${name} is already in contacts!`);
  //   return;
  // }

  // const newContact = {
  //  id: uuidv4(),
  // name,
  //   number,
  //  };
  // setContacts(prevState => [newContact, ...prevState]);
  //};

  //  const deleteContacts = contactId => {
  // setContacts(prevState =>
  //   prevState.filter(contact => contact.id !== contactId),
  //  );
  // };

  //const changeFilter = e => {
  //  setFilter(e.currentTarget.value);
  //};

  // const getVisibleContacts = () => {
  //  const normalizedFilter = filter.toLowerCase();

  //  return contacts.filter(contact =>
  //    contact.name.toLowerCase().includes(normalizedFilter),
  // );
  //};

  // const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <CotactsForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactsList
      //contacts={visibleContacts}
      //onDeleteContacts={deleteContacts}
      />
    </Container>
  );
}
