import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsAction } from '../redux/phonebook/phonebook-operations';
import ContactList from '../components/ContactsList/ContactsList.jsx';
import ContactForm from '../components/ContactsForm/ContactsForm.jsx';
import Filter from '../components/Filter/Filter';

export default function ContactsView(params) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContactsAction()), [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
