import styled from 'styled-components';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm ';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const newUser = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newUser],
      };
    });
  };

  filterUsers = event => {
    console.log(event.target.value);
  };

  deleteUsers = userId => {
    console.log(userId);
  };

  render() {
    return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} click={this.filterUsers} />
          <ContactList
            contacts={this.state.contacts}
            deleteUsers={this.deleteUsers()}
          />
        </Section>
      </>
    );
  }
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  h1 {
    margin-bottom: 40px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;

    color: #000000;
  }

  h2 {
    margin-bottom: 20px;
  }
`;
