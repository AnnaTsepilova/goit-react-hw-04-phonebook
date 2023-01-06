import PropTypes from 'prop-types';
import { SubTitle } from 'components/Section/Section.styled';

export default function Section({ title, children }) {
  return (
    <>
      {title && <SubTitle>{title}</SubTitle>}
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
