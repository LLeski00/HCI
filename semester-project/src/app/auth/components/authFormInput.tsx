"use client";
import '../styles/auth.css';

type AuthFormInputProps = {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthFormInput({ id, label, type, name, placeholder, value, onChange }: AuthFormInputProps) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="info-box"
      />
    </div>
  );
}