/* eslint-disable max-len */
export const fetchAllCharacters = async (page) => {
  const res = await fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters'
  );
  const characters = await res.json();

  return characters.slice((page - 1) * 10, page * 10);

};

export const fetchCharacterById = async (_id) => {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${_id}`);

  return res.json();
};

