import styled from 'styled-components';

export const FormContainer = styled.form`
  padding-top: ${props => props.theme.space[5]}px;
  padding-bottom: ${props => props.theme.space[5]}px;
  padding-left: ${props => props.theme.space[5]}px;
  padding-right: ${props => props.theme.space[5]}px;

  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  border-radius: ${props => props.theme.radii.normal};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.space[4]}px;
  font-size: 18px;
`;

export const ContactInput = styled.input`
  display: block;
  margin-top: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
  font-size: 20px;

  border: 1px solid #21212133;
  border-radius: 4px;
  outline: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.colors.secondary};

  &:focus {
    border: 1px solid ${props => props.theme.colors.accentColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Button = styled.button`
  min-width: 120px;
  height: 40px;

  text-align: center;
  border-radius: 4px;
  border-width: 0;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.accentColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;

  cursor: pointer;
  outline: rgba(0, 0, 0, 0);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #eef7ff;
    color: ${props => props.theme.colors.accentColor};
  }
`;

export const DeleteButton = styled(Button)`
  min-width: 70px;
  height: 25px;
  font-size: 14px;

  color: ${props => props.theme.colors.background};
  background-color: #eebf31;

  &:hover {
    background-color: #eef7ff;
    color: #eebf31;
  }
`;
