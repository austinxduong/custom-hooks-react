import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllCharacters, fetchCharacterById } from '../services/avatarApi';


const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCharacters()
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  return [characters, loading];
};


// const useCharacter = () => {
//   const [character, setCharacter] = useState({});
//   const [loading, setLoading] = useState(true);

//   const { id } = useParams();
//   useEffect(() => {
//     fetchCharacterById(id)
//       .then(setCharacter)
//       .finally(() => setLoading(false));
//   }, []);

//   return [character, loading];
// };

export { useCharacters };
