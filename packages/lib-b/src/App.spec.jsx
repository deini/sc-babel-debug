import { App } from './App';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';

test('dummy', () => {
  const { debug } = render(<App />);

  debug();
  expect(App).toBeDefined();
});
