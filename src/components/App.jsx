import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { PhonebookContainer, Title } from './App.styled';

import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import initialContacts from 'components/data/contacts.json';

class App extends Component {
  static defaultProps = {};

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  state = {
    contacts: initialContacts,
    filter: '',
  };

  contactDeleteHandler = contactId => {
    this.setState(
      ({ contacts }) => ({
        contacts: contacts.filter(contact => contact.id !== contactId),
      }),
      Notify.success('Contact is deleted', {
        fontSize: '16px',
        width: '350px',
      })
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    let id = nanoid();
    let contact = { id: id, name: data.name, number: data.number };

    let isContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(data.name.toLowerCase())
    );
    console.log(isContact);
    if (isContact.length) {
      Notify.warning(`${data.name} is already in contacts`, {
        background: '#eebf31',
        fontSize: '16px',
        width: '350px',
      });
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilter = value => {
    this.setState(() => ({
      filter: value,
    }));
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  render() {
    return (
      <PhonebookContainer>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Section title="Contacts"></Section>
        <Filter filterByName={this.handleFilter} />
        <ContactsList
          contacts={this.getContacts()}
          onDelete={this.contactDeleteHandler}
        />
      </PhonebookContainer>
    );
  }
}

export default App;
