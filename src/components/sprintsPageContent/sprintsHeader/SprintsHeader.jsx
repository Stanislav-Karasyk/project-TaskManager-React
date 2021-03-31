import React from 'react';
import styles from './SprintsHeader.module.css';
import sprite from '../../../icons/symbol-defs.svg';
import RoundButton from '../../../shared/roundButton/RoundButton';

const SprintsHeader = () => {

    return (<div>
      <div className={styles.head}>
        <div className={styles.titleBox}>
          <h2 className={styles.pageTitle}>PROJECT NAME</h2>
          <button type='button' className={styles.buttonFix}>
            <svg className={styles.iconPencil}>
              <use href={sprite + '#icon-pencil'}></use>
            </svg>
          </button>
        </div>
        <div className={styles.buttonBox}>
          <RoundButton />
          <p className={styles.pageText}>Create sprint</p>
        </div>
      </div>
      <p className={styles.description}>Короткий опис проекту, якщо він є, розміщуєтсья тут. Ширина тектового блоку</p>
      <div className={styles.addPeopleBox}>
        <button type='button' className={styles.buttonAddPeople}>
          <svg className={styles.iconAddPeople}>
            <use href={sprite + '#icon-add-group'}></use>
          </svg>
          <p className={styles.addPeopleText}>Add people</p>
        </button>
      </div>
   </div>);

}

export default SprintsHeader;