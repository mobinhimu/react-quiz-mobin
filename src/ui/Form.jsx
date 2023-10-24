import styles from "./Form.module.css";

function Form({ children, formType, onSubmit }) {
  return (
    <form className={`${formType} ${styles.form}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
