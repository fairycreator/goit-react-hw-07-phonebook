import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, DeleteButton } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
