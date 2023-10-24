import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.message}>
      <h1>Page Not Found 404</h1>

      <button onClick={() => navigate("/", { replace: true })}>
        &larr; Back To Home
      </button>
    </div>
  );
}

export default PageNotFound;
