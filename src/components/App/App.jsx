import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { delContactsThunk } from '../redux/contactsThunk';
import { setFilter } from '../redux/filterSlice';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import {
  BackgroundContainer,
  Stars,
  Stars2,
  Stars3,
} from '../Background/Background.styled';
import {
  CallToActionText,
  PlayerContainer,
  SoundCloudButton,
  Container,
  Wrapper,
  Title,
  SubTitle,
} from './App.styled';

const App = () => {
  const [playing, setPlaying] = useState(false);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(delContactsThunk(id));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
      {/* <PlayerContainer>
        <ReactPlayer
          url="https://soundcloud.com/nunomikepimenta/sets/house-music-2023-part-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          playing={playing}
          width="0"
          height="0"
        />
        <CallToActionText>Click Play, You Won't Regret It!</CallToActionText>
        <SoundCloudButton onClick={() => setPlaying(true)}>
          Play
        </SoundCloudButton>
        <SoundCloudButton onClick={() => setPlaying(false)}>
          Stop
        </SoundCloudButton>
      </PlayerContainer> */}

      <BackgroundContainer>
        <Stars />
        <Stars2 />
        <Stars3 />
        <Container>
          <Title>
            Phone<span>book</span>
          </Title>
          <ContactForm />
          <SubTitle>Contacts</SubTitle>
          {contacts.length > 0 ? (
            <Filter value={filter} onChangeFilter={handleFilterChange} />
          ) : (
            <Wrapper>Your phonebook is empty. Add the first contact!</Wrapper>
          )}
          {contacts.length > 0 && (
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={deleteContact}
            />
          )}
        </Container>
      </BackgroundContainer>
    </div>
  );
};

export default App;
