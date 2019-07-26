import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: papayawhip;

  ${({ theme }) =>
    css`
      color: 'red';
    `};
`;
