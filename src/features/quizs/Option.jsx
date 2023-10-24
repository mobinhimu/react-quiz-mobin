function Option({ label, id, isChecked, onChange }) {
  return (
    <label className="option" htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={isChecked}
        disabled={isChecked}
      />{" "}
      {label}
    </label>
  );
}

export default Option;
