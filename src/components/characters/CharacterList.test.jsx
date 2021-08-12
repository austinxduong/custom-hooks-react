import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


import CharacterList from './CharacterList';

describe.only('Avatar component aka Character.jsx', () => {
  it('renders individual character from Avatar component', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList
       
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
