import { nanoid } from 'nanoid';

export const ContactList = ({ contacts }) => {
  const newId = {
    id: nanoid(),
  };

  console.log(contacts);

  return (
    <>
      <ul key={newId}>
        {contacts.map(user => (
          <li key={newId}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
