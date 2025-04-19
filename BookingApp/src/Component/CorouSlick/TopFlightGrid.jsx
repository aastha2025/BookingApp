import React from 'react';
import styles from './TopFlightGrid.module.css';

const TopFlightGrid = ({ item }) => {
  return (
    <div className={styles.gridContainer}>
      {item.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={item.image} alt={`Flight Route ${index + 1}`} className={styles.image} />
          <span className={styles.txy}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TopFlightGrid;