import styles from "./Message.module.css";

function Message({ children, status }) {
  return <div className={`${status} ${styles.message}`}>{children}</div>;
}

export default Message;
