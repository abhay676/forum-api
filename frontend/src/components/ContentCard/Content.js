import { useState } from 'react';
import Avatar from 'react-avatar';
import { Button } from 'react-bootstrap';
import styles from './Content.module.css';

import Reply from '../Reply/Reply';
const Content = ({ isQuestion }) => {
  const [like, setLike] = useState(false);
  return (
    <div className={styles.wrapper}>
      {isQuestion && (
        <div className={`${styles.heading}`}>
          Best way to export data in xml and csv format
        </div>
      )}

      <div className={styles.userInfo}>
        <Avatar
          color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
          name="Abhay Goswami"
          size="50px"
          round
          style={{ marginRight: '15px' }}
        />
        <div className={styles.answer_accepted}>
          <div>
            <p>Abhay Goswami</p>
            <p>4 days ago</p>
          </div>
          {!isQuestion && (
            <div>
              <span className="badge bg-success m-2">ACCEPTED</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.content}>
        Dolore nostrud proident cupidatat nostrud commodo consequat. Amet sint
        et velit veniam adipisicing do enim nisi nostrud officia eu dolor. Non
        adipisicing cupidatat non labore est adipisicing officia deserunt. Amet
        culpa cupidatat voluptate adipisicing nulla labore est nulla in commodo
        eu magna sint reprehenderit. Ad aliqua incididunt velit consectetur
        minim laboris velit minim ut occaecat. Velit minim adipisicing sunt sunt
        voluptate nisi velit minim deserunt quis laboris culpa enim aliquip.
        Elit dolor velit Lorem esse aliquip Lorem. Elit quis do amet magna ea
        aute exercitation esse est incididunt.
      </div>
      <div className={styles.tags}>
        <span style={{ marginRight: '2px' }}>#Computers</span>
      </div>
      <div className={styles.footer}>
        <div onClick={() => setLike(!like)} className={styles.like}>
          {like ? (
            <span class="material-icons">favorite</span>
          ) : (
            <span class="material-icons">favorite_border</span>
          )}
          <div style={{ marginLeft: '4px', fontWeight: 500 }}>4 likes</div>
        </div>
        {isQuestion && (
          <div className={styles.report}>
            <Button variant="outline-danger">Report this question</Button>{' '}
          </div>
        )}
      </div>

      <hr />
      {/* Replies */}
      <Reply />
      <hr />
    </div>
  );
};

export default Content;
