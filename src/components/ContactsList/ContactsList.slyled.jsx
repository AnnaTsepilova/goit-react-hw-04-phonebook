import styled from 'styled-components';

export const ContactsListContainer = styled.ul`
  list-style-type: disc;
  padding-bottom: ${props => props.theme.space[6]}px;
`;

export const ContactsItem = styled.li`
  width: 100%;
  margin-right: ${props => props.theme.space[5]}px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const Text = styled.span`
  margin-right: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  font-size: 20px;
`;
