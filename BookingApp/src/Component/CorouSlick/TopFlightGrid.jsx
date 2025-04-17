import React from 'react';
import styles from './TopFlightGrid.module.css';

const TopFlightGrid = ({ items }) => {
  return (
    <div className={styles.gridContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={item.image} alt={`Flight Route ${index + 1}`} className={styles.image} />
          <span className={styles.txy}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TopFlightGrid;
