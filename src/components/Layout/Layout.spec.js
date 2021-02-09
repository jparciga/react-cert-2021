import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';

describe('Layout', () => {
  test('render', () => {
    render(<Layout />);
    const main = screen.getByRole('main');
    expect(main.className).toBe('wrong-container');
  });
});
