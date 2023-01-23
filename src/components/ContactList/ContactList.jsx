export const ContactList = ({ contacts }) => {
  console.log(contacts);

  return (
    <>
      <ul>
        {contacts.map(user => (
          <li kei={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
