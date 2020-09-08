import React from 'react';
import styles from './petPage.module.css';

const petPage = ({ propItem }) => {
  const {
    name,
    image,
    age,
    gender,
    color,
    breed,
    description,
    onGoback,
  } = propItem;
  return (
    <li className={styles.cardPet}>
      <button className={styles.btnReturn} type="button" onClick={onGoback}>
        Return
      </button>
      <h2 className={styles.name}>{name}</h2>
      <img src={image} alt="" />
      <div>
        <p className={styles.age}>Age:{age}</p>
        <p className={styles.gender}>Gender:{gender}</p>
        <p className={styles.color}>Color:{color}</p>
        <p className={styles.breed}>Breed:{breed}</p>
      </div>
      <title className={styles.title}>{description}</title>
    </li>
  );
};

export default petPage;
