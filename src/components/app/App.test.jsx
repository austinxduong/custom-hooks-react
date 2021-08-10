import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  it('renders parent api component to app.js homepage', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('en route...');
    return waitFor(async () => {
      const ul = await screen.findByRole('list');
      expect(ul).not.toBeEmptyDOMElement();
    }, 1000);
  });

});
