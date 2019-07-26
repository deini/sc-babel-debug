import styled, { css } from 'styled-components';
import { Button } from 'lib-a';

export const App = styled(Button)`
  background-color: red;

  ${({ theme }) => css`
    color: green;
  `}
`;
