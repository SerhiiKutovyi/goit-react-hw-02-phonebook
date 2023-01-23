import { ContactStyled } from './ContactList.style';

export const ContactList = ({ contacts, deleteUsers }) => {
  return (
    <>
      <ContactStyled>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => {
                deleteUsers();
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ContactStyled>
    </>
  );
};
