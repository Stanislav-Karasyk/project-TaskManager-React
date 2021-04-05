import React, { useEffect } from 'react';
import styles from './ProjectsList.module.css';
import ProjectItem from './projectItem/ProjectItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsSelector, getProjectLoading } from '../../redux/projects/projects-selectors';
import Loader from '../loader/Loader';
import { getProjects } from '../../redux/projects/projects-operations';

const ProjectsList = () => {
  const projects = useSelector(getProjectsSelector);
  const isLoading = useSelector(getProjectLoading);
  const dispatch = useDispatch();

//
//  useEffect(() => {
//    const getResult = async () => {
//        await dispatch(getProjects());
//    };
//    getResult();
//  }, [dispatch]);

  return(
    <div className={styles.box}>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        !projects.length && (
          <div className={styles.emptyMessageBox}>
            <h2 className={styles.emptyMessage}>
              Your project collection is empty, use the "Create project" button.
            </h2>
          </div>
        )
      )}
      {!projects.message &&
          <ul className={styles.projectList}>
            {projects.map(item => (
              <ProjectItem key={item._id} item={item} />
            ))}
          </ul>
      }
    </div>
  )

};

export default ProjectsList;
