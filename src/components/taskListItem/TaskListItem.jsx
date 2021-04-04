import React, { useState } from 'react';
import styles from './TaskListItem.module.css';
import sprite from '../../icons/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, changeTask } from '../../redux/tasks/task-operations.js';
import { getTasks } from '../../redux/tasks/task-selectors';
import { useParams } from 'react-router-dom';


const TaskListItem = ({ item }) => {
  const dispatch = useDispatch();
  const deleteItem = () => dispatch(deleteTask(item._id));

  const date = item.hoursWastedPerDay[0].currentDay;
  console.log(date)
  // const date = "2021-04-04";

  const [hours, setHours] = useState();
 
  const onHandleChange = e => {
    const hours = Number(e.target.value);
    // const hours = e.target.value;
    if (hours > 0) {
      setHours(hours);
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(changeTask(date, hours, item._id));
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{item.title}</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.itemName}>Scheduled hours</span>
          <span>{item.hoursPlanned}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.itemName}>Hours spent / per day</span>
          <form>
            <input
              className={styles.input}
              type="number"
              onChange={onHandleChange}
              onBlur={onHandleSubmit}
              // value={hours}
            />
          </form>
        </li>
        <li className={styles.item}>
          <span className={styles.itemName}>Hours spent</span>
          <span>{hours}</span>
        </li>
        <li className={styles.item}>
          <span></span>
          <button onClick={deleteItem} className={styles.button} type="button">
            <svg className={styles.icon}>
              <use href={sprite + '#icon-delete-bin'} />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TaskListItem;
