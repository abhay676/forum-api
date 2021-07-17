import styles from './AskQuestion.module.css';

import QuestionForm from '../../components/QuestionForm/QuestionForm';
const AskQuestion = () => {
  return (
    <div className={styles.wrapper}>
      <QuestionForm />
    </div>
  );
};

export default AskQuestion;
