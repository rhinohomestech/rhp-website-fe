import React from "react";
import "./InputField.scss";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  error,
  placeholder,
  ...otherProps
}) => {
  return (
    <label htmlFor={label} className="general-label">
      {label}
      <input
        id={label}
        name={type}
        autoComplete="false"
        autoSave="off"
        type={type}
        placeholder={placeholder}
        {...otherProps}
        className="general-input"
      />
      <span className="error-message">{error}</span>
    </label>
  );
};

export default InputField;
