import { FilterStyled } from './Filter.style';

export const Filter = ({ click, filter }) => {
  return (
    <>
      <FilterStyled>
        <label htmlFor="name">Find contacts by name</label>
        <input
          type="text"
          name="name"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={click}
        />
      </FilterStyled>
    </>
  );
};
