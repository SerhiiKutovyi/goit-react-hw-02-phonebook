import styled from 'styled-components';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm ';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
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

  render() {
    return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
          <h2>Contacts</h2>
          <ContactList contacts={this.state.contacts} />
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
    margin-bottom: 40px;
  }
`;
