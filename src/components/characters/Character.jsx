/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ name, allies, photoUrl }) => (
  <figure>
    <img src={photoUrl} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{allies}</p>
    </figcaption>
  </figure>
);

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};

export default Avatar;

