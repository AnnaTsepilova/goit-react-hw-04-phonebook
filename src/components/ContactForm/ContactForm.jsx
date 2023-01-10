import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  FormContainer,
  Label,
  ContactInput,
  Button,
} from 'components/ContactForm/ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };
  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name: name, number: number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <ContactInput
        type="text"
        name="name"
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
        id={nameInputId}
      />
      <Label htmlFor={telInputId}>Number</Label>
      <ContactInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
        id={telInputId}
      />
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.string,
};
