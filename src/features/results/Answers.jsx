import Answer from "./Answer";

function Answers({ options }) {
  return (
    <div className="checkBoxContainer">
      {options.map(({ title, correct, checked }, index) => (
        <Answer key={index} title={title} correct={correct} checked={checked} />
      ))}
    </div>
  );
}

export default Answers;
