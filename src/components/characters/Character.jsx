/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ name, allies, photoUrl }) => (
  <figure>
    <img src={photoUrl} alt={name} />
    <figcaption>
      <h2>{name}</h2>
      <p>{allies}</p>
    </figcaption>
  </figure>
);

Avatar.PropTypes = {
  name: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};

export default Avatar;

