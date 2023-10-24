import { illustrationNameConvert } from "../helper/illustrationName";
import styles from "./Illustration.module.css";

function Illustration({ illustration }) {
  const { illustrationName } = illustrationNameConvert(illustration);

  return (
    <div className={styles.illustration}>
      <img src={illustration} alt={illustrationName} />
    </div>
  );
}

export default Illustration;
