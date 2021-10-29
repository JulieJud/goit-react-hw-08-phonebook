import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import * as phonebookOperation from '../../redux/phonebook/phonebook-operations';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = (name, number) =>
    dispatch(phonebookOperation.addContactAction({ name, number }));

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkName(name)) {
      alert(`${name} is already in contacts`);
    } else {
      onSubmit(name, number);
      setName('');
      setNumber('');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <h2>Add new contact</h2>
          <Form.Label>Name</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}
                placeholed="Enter name"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Mobil</Form.Label>
              <Form.Control
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}
                placeholed="Enter mobile number"
              />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col>
            <Button type="submit">Add to contact list</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default ContactForm;
