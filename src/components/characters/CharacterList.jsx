import React from 'react';
// import { Link } from 'react-router-dom';
import Avatar from './Character';

// import { useCharacters } 

const AvatarList = () => {
  const [characters, loading] = useCharacters();
  //   line 8, we will come back to this file. well have to create state hook
  const characterItems = characters.map((character) => {
    return (
      <li key={character.id}>
        <Avatar {...character} />
      </li>
    );
  });

  if(loading) return <h1>en route....</h1>;
  return (
    <>
      <ul>{characterItems}</ul>;
    </>
  );
};

export default AvatarList;



