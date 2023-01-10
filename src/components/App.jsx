import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { PhonebookContainer, Title } from './App.styled';

import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import initialContacts from 'components/data/contacts.json';
import useLocalStorage from 'hooks/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const contactDeleteHandler = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    Notify.success('Contact is deleted', {
      fontSize: '16px',
      width: '350px',
    });
  };

  const formSubmitHandler = data => {
    let contact = { id: nanoid(), name: data.name, number: data.number };

    let isContactName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(data.name.toLowerCase())
    );
    let isContactNumber = contacts.filter(contact =>
      contact.number.toLowerCase().includes(data.number.toLowerCase())
    );

    if (isContactName.length) {
      Notify.warning(`Name ${data.name} is already in your contacts`, {
        background: '#eebf31',
        fontSize: '16px',
        width: '350px',
      });
      return;
    }

    if (isContactNumber.length) {
      Notify.warning(`Number ${data.number} is already in your contacts`, {
        background: '#eebf31',
        fontSize: '16px',
        width: '350px',
      });
      return;
    }
    setContacts(prevState => [...prevState, contact]);
  };

  const handleFilter = value => {
    setFilter(value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <PhonebookContainer>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={formSubmitHandler} />
      <Section title="Contacts"></Section>
      <Filter filterByName={handleFilter} />
      <ContactsList
        contacts={getFilteredContacts()}
        onDelete={contactDeleteHandler}
      />
    </PhonebookContainer>
  );
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  contactDeleteHandler: PropTypes.func,
  formSubmitHandler: PropTypes.func,
  handleFilter: PropTypes.func,
  getFilteredContacts: PropTypes.func,
};
