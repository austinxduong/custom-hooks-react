import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../state/character';

const CharacterDetails = () => {
  const { _id } = useParams();
  const character = useCharacter(_id);
  if(!character) return <h1>en route...</h1>;

  return (
    <section>
      <h2> Details:</h2>
      <dl data-testid="1">

        <dt>Photo</dt>
        <dd>
          <img src={character.photoUrl} alt={character.name}/>
        </dd>

        <dt>Name</dt>
        <dd>{character.name}</dd>

        <dt>Affiliation</dt>
        <dd>{character.affiliation}</dd>

        <dt>Allies</dt>
        <dd>{character.allies}</dd>


      </dl>
    </section>
  );
};

export default CharacterDetails;
