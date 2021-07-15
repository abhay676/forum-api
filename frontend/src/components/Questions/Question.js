import { useState } from 'react';
import Avatar from 'react-avatar';
import { Button } from 'react-bootstrap';
import styles from './Questions.module.css';

const Question = () => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.heading}>How to restart the computer</div>
      <div className={styles.question_info_wrapper}>
        <div className={styles.question_info}>
          <div className={styles.avatar}>
            <Avatar
              color={Avatar.getRandomColor('sitebase', [
                'red',
                'green',
                'blue',
              ])}
              name="Wim Mostmans"
              size="50px"
              round
            />
          </div>
          <div className={styles.userInfo_wrapper}>
            <div className={styles.userInfo}>
              <div>Abhay Goswami</div>
              <div>6 hrs ago</div>
            </div>
            <span className="badge bg-secondary m-2">Javascript</span>
            <span className="badge bg-secondary m-2">Typescript</span>
          </div>
        </div>
        <div className={styles.channel}>
          <div className={styles.channel_name}>Computer</div>
          <div className={styles.channel_name}>Javascript</div>
        </div>
      </div>

      <div className={styles.content}>
        Duis elit quis officia sit pariatur dolore minim minim culpa quis. Lorem
        reprehenderit excepteur in officia duis Lorem. Amet velit eu in
        voluptate fugiat do occaecat sit fugiat consequat in mollit. Voluptate
        laboris minim mollit quis amet magna culpa sit. Consectetur minim nulla
        esse sit proident dolore aliqua inci
      </div>
      <div className={styles.footer}>
        <div className={styles.bookmark_wrapper}>
          <span
            className={`material-icons ${styles.footer_icon}`}
            onClick={() => setBookmark(!bookmark)}
          >
            {bookmark ? 'bookmark' : 'bookmark_border'}
          </span>
        </div>
        <Button variant="light">Reply</Button>{' '}
      </div>
    </div>
  );
};

export default Question;
