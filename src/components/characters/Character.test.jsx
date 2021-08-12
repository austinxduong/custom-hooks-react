import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Avatar from './Character';

describe('Avatar component aka Character.jsx', () => {
  it('renders individual character from Avatar component', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Avatar
          name= "idk"
          allies= "animal"

        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
