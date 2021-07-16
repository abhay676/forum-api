import styles from './Reply.module.css';
const Reply = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        {' '}
        Lorem velit non qui ex id sint id minim velit in voluptate deserunt.
        Adipisicing Lorem qui excepteur minim officia id reprehenderit excepteur
        amet amet Lorem esse reprehenderit. Sint ipsum Lorem culpa id mollit
        veniam in consectetur minim proident officia cupidatat irure occaecat.
        Ad fugiat ipsum qui nulla nulla ullamco consectetur consectetur labore
        adipisicing anim deserunt sint. Duis ea Lorem eu duis quis ex officia
        magna. Quis veniam culpa cillum non irure officia exercitation tempor
        sint ea ad nostrud et.
      </p>
      <div className={styles.userInfo}>
        <p>Abhay Goswami</p>
        <p>4 days ago</p>
      </div>
    </div>
  );
};

export default Reply;
