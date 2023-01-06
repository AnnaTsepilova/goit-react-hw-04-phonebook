import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  FormContainer,
  Label,
  ContactInput,
  Button,
} from 'components/ContactForm/ContactForm.styled';

class ContactForm extends Component {
  static defaultProps = {};

  static propTypes = {
    contacts: PropTypes.array,
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>Name</Label>
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
          id={this.nameInputId}
        />
        <Label htmlFor={this.telInputId}>Number</Label>
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
          id={this.telInputId}
        />
        <Button type="submit">Add contact</Button>
      </FormContainer>
    );
  }
}

export default ContactForm;
