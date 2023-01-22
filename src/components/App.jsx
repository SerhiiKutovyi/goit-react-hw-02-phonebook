import styled from 'styled-components';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Section>
          <h2>PhoneBook</h2>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="button"> Add contact</button>
        </Section>
        <section>
          <h2>Contacts</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </>
    );
  }
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  p {
    margin-bottom: 20px;
  }
  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;

    color: #000000;
  }

  input {
    max-width: 200px;

    margin-bottom: 20px;
  }

  button {
    max-width: 100px;
  }
`;
