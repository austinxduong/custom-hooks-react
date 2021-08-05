import { useState, useEffect } from 'react';
import { fetchAllCharacters, fetchCharacterById } from '../services/avatarApi';


export const useCharacters = (page) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchAllCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  return { characters, loading };
};

export const useCharacter = (id) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacterById(id).then(setCharacter);
  }, []);

  return character;
};



// const useCharacters = () => {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchAllCharacters()
//       .then(characters => setCharacters(characters))
//       .finally(() => setLoading(false));
//   }, []);

//   return [characters, loading];
// };


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

// export { useCharacters };


