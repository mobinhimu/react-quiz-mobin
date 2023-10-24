import styles from "./TextInput.module.css";

function TextInput({
  children,
  inputName = "Your Name",
  type = "text",
  onChange,
  disabled,
}) {
  const name = inputName
    .split(" ")
    .map((name, index) =>
      index === 0
        ? name[0].toLowerCase() + name.slice(1, name.length)
        : name[0].toUpperCase() + name.slice(1, name.length)
    )
    .join("");

  return (
    <div className={styles.textInput}>
      <input
        type={type}
        placeholder={inputName}
        onChange={onChange}
        disabled={disabled}
        name={name}
        required
      />
      <span>{children}</span>
    </div>
  );
}

export default TextInput;
