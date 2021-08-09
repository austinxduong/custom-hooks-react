import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Character';

import { useCharacters } from '../../state/character';

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const { characters, loading } = useCharacters(page);
  if(loading) return <h1>en route...</h1>;

  const characterElements = characters.map((character) => (
    <li key={character._id}>
      <Link to={`/${character._id}`}>
        <Avatar {...character} />
      </Link>
    </li>
  ));

  return (
    <>
      <button
        disabled ={page <= 1}
        onClick={() => setPage((prevPage) => prevPage - 1)}>
                    &lt;
      </button>
      {page}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{characterElements}</ul>
    </>
  );
};

export default CharacterList;



