import "./Form.css";

const Form = ({ fields }) => {
  return (
    <form className="form">
      {fields.map((field, idx) => (
        <div key={idx} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            type={field.type || "text"}
            name={field.name}
            placeholder={field.placeholder || ""}
          />
        </div>
      ))}

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
