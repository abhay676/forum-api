import styles from './Thread.module.css';
import Content from '../../components/ContentCard/Content';
const Thread = () => {
  return (
    <div className="mt-8">
      <div className={styles.wrapper}>
        <Content isQuestion />
        <div className={styles.answer_count}>
          <h3>12 Answers</h3>
          <div>Filters</div>
        </div>
        <Content />
      </div>
    </div>
  );
};

export default Thread;
