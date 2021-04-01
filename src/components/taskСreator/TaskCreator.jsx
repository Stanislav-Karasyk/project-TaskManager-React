import React from 'react';
import styles from './TaskCreator.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  name: Yup.string().required('* Task name is a required field'),
  days: Yup.number().required('* Description is a required field'),
});

const TaskCreator = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.titleForm}>Create new task</h2>
      <Formik
        initialValues={{
          name: '',
          days: '',
        }}
        validationSchema={formSchema}
        onSubmit={async (values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          // console.log(values);
          resetForm({});
          //createTask//
        }}
      >
        <Form className={styles.form}>
          <Field
            className={styles.inputName}
            name="name"
            type="text"
            placeholder="Task name"
          />
          <ErrorMessage
            className={styles.errorName}
            component="span"
            name="name"
          />

          <Field
            className={styles.inputDays}
            name="days"
            type="text"
            placeholder="Project duration"
          />

          <ErrorMessage
            className={styles.errorDays}
            component="span"
            name="days"
          />
          <button type="submit"> done </button>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskCreator;

// const TaskCreator = () => {
//   return (
//       <form onSubmit="">
//         <h1 className={styles.title}>Task creation</h1>
//         <label className={styles.label}>
//           The name of the task *
//           <input
//             className={styles.input}
//             type="text"
//             name="name"
//             onChange=""
//             //   value=""
//             required
//           />
//         </label>

//         <label className={styles.label}>
//           Scheduled hours *
//           <input
//             className={styles.inputHours}
//             type="text"
//             name="hours"
//             onChange=""
//             //   value=""
//             required
//           />
//         </label>
//         <button className={styles.button} type="submit">
//           Done
//         </button>
//         <button className={styles.buttonCancel} type="button">
//           Cancel
//         </button>
//       </form>
//   );
// };

// export default TaskCreator;
