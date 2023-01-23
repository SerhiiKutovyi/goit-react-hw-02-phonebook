export const ContactList = ({ id, name, number, createUsers }) => {
  return (
    <ul>
      <li>
        {name}
        {() => {
          createUsers();
        }}
      </li>
    </ul>
  );
};
