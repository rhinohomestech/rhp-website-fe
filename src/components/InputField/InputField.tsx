import React from "react";
import "./InputField.scss";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
  name: string;
  type: string;
  value: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  error,
  name,
  value,
  onChange,
  ...otherProps
}) => {
  return (
    <div className="form-item">
      <input
        type={type}
        id={name}
        name={name} 
        value={value}
        autoComplete="notfoundDoNotComplete"
        required
        onChange={onChange} // Ensure state updates
        {...otherProps}
      />
      <label htmlFor={name}>{label}</label>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;
