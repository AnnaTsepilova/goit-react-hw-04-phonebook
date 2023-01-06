import PropTypes from 'prop-types';
import {
  ContactsListContainer,
  ContactsItem,
  Text,
} from 'components/ContactsList/ContactsList.slyled';
import { DeleteButton } from 'components/ContactForm/ContactForm.styled';

export default function ContactsList({ contacts, onDelete }) {
  return (
    <ContactsListContainer>
      {contacts.length ? (
        contacts.map(contact => {
          return (
            <ContactsItem key={contact.id}>
              <Text>
                {contact.name}: {contact.number}
              </Text>
              <DeleteButton
                type="button"
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                Delete
              </DeleteButton>
            </ContactsItem>
          );
        })
      ) : (
        <Text>There is no contact in your phonebook</Text>
      )}
    </ContactsListContainer>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};
