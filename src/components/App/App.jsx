import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import {
  BackgroundContainer,
  Stars,
  Stars2,
  Stars3,
} from '../Background/Background.styled';
import { Container, Wrapper, Title, SubTitle } from '../App/App.styled';

const App = () => {
  const audioRef = useRef(null);
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const addContactHandler = contact => {
    dispatch(addContact({ ...contact, id: nanoid() }));
  };

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <audio
        ref={audioRef}
        src="../../../assets/Raphael Saadiq - Big Easy (Live @ KEXP).mp3"
        loop
      />

      <BackgroundContainer>
        <Stars />
        <Stars2 />
        <Stars3 />
        <Container>
          <Title>
            Phone<span>book</span>
          </Title>
          <ContactForm onSubmit={addContactHandler} />
          <SubTitle>Contacts</SubTitle>
          {contacts.length > 0 ? (
            <Filter value={filter} onChangeFilter={handleFilterChange} />
          ) : (
            <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
          )}
          {contacts.length > 0 && (
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={deleteContactHandler}
            />
          )}
        </Container>
      </BackgroundContainer>
    </div>
  );
};

export default App;
