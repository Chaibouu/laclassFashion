'use client'
import React, { useEffect } from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        <div className={styles.scissors}>
          <div className={styles.scissorsPart1}></div>
          <div className={styles.scissorsPart2}></div>
        </div>
        <div className={styles.fabric}>
          <div className={styles.fabricCut}></div>
        </div>
        <p className={styles.loadingText}>LaClassFashion</p>
      </div>
    </div>
  );
};

export default Loader;