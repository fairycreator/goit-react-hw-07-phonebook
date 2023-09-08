import React, { useRef } from 'react';
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
  const audioRef = useRef(
    new Audio('../../../assets/Raphael Saadiq - Big Easy (Live @ KEXP).mp3')
  );
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const playAudio = () => {
    audioRef.current.play();
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

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
      <button onClick={playAudio}>Play</button>
      <button onClick={stopAudio}>Stop</button>

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
