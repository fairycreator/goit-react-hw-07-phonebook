import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, SubmitButton } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </Label>
      <SubmitButton type="submit">Add Contact</SubmitButton>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
