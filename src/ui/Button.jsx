import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({
  children,
  onClick,
  className,
  type = "click",
  link,
  disabled,
}) {
  if (link)
    return (
      <Link
        to={link}
        className={`${styles.button} ${className}`}
        replace={true}
      >
        {children}
      </Link>
    );

  if (type === "click") {
    return (
      <button
        onClick={onClick}
        className={`${styles.button} ${className}`}
        type="button"
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}
      type="submit"
    >
      {children}
    </button>
  );
}

export default Button;
