import React from 'react';
import styles from './MembersList.module.css';

const MembersList = ({ members }) => {
  // if (!members.length) {
  //   <p className={styles.message}>You have not added any users yet</p>;
  // }
  // <p className={styles.addedMembers}> Added users: members.length </p>;

  return (
    <div className={styles.container}>
      <p className={styles.message}>You have not added any users yet</p>
      <ul className={styles.membersList}>
        <li className={styles.membersListItem}>
          <p>username@gmail.com</p>
          <button type="button" className={styles.deleteBtn}>
            .
          </button>
        </li>
        <li className={styles.membersListItem}>
          <p>username@gmail.com</p>
          <button type="button" className={styles.deleteBtn}>
            .
          </button>
        </li>

        {/* {members.map(({ email, id }) => (
        <MemberListItem key={id} id={id}  email={email} />
      ))} */}
      </ul>
    </div>
  );
};

export default MembersList;