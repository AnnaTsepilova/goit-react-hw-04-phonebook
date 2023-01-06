import styled from 'styled-components';

export const Title = styled.h1`
  padding-top: ${props => props.theme.space[6]}px;
  padding-bottom: ${props => props.theme.space[6]}px;
  font-size: ${props => props.theme.fontSizes.xl}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
`;

export const PhonebookContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;
