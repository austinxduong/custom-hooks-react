import { useState, useEffect } from 'react';
import { fetchCharacterById, fetchAllCharacters } from '../services/avatarApi';


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



