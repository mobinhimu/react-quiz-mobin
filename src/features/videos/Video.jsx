import { Link } from "react-router-dom";
import styles from "./Video.module.css";

function Video({ video }) {
  const { title, noq, youtubeID } = video;

  return noq ? (
    <Link to={`/quiz/${youtubeID}`}>
      <div className={styles.video}>
        <img
          src={`https://i.ytimg.com/vi/${youtubeID}/hq720.jpg`}
          alt={title}
        />
        <p>{title}</p>
        <div className={styles.qmeta}>
          <p>{noq ? noq : "No"} Questions</p>
          {noq ? <p>Score : Not taken yet </p> : null}
        </div>
      </div>
    </Link>
  ) : (
    <div className={`${styles.video} ${styles.noqNull}`}>
      <img src={`https://i.ytimg.com/vi/${youtubeID}/hq720.jpg`} alt={title} />
      <p>{title}</p>
      <div className={styles.qmeta}>
        <p>{noq ? noq : "No"} Questions</p>
        {noq ? <p>Score : Not taken yet </p> : null}
      </div>
    </div>
  );
}

export default Video;
