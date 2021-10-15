import CotactsForm from '../contacts/ContactsForm/ContactsForm';
import ContactsList from '../contacts/ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { Title, Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <CotactsForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
    </Container>
  );
}
