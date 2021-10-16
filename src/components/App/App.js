import ContactList from '../contacts/ContactsList/ContactsList.jsx';
import ContactForm from '../contacts/ContactsForm/ContactsForm.jsx';
import Filter from '../Filter/Filter.jsx';
import { Title } from './App.styled';

export default function App() {
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </div>
  );
}
