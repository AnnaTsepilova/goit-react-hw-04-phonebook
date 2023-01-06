import PropTypes from 'prop-types';

import { FilterContainer } from 'components/Filter/Filter.styled';
import { Text } from 'components/ContactsList/ContactsList.slyled';
import { ContactInput } from 'components/ContactForm/ContactForm.styled';

export default function Filter({ searchQuery, filterByName }) {
  return (
    <FilterContainer>
      <Text>Find contacts by name</Text>
      <ContactInput
        type="text"
        value={searchQuery}
        onChange={event => filterByName(event.target.value)}
      />
    </FilterContainer>
  );
}

Filter.propTypes = {
  filterByName: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};
