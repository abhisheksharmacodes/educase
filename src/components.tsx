import React from 'react';

interface TextBoxProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  [key: string]: any;
}

export const TextBox: React.FC<TextBoxProps> = ({ label, type="text", placeholder, value, onChange, error, ...props }) => {
  return (
    <div className="relative">
      <label
        htmlFor={placeholder}
        className={`absolute left-2 -top-2 text-xs text-[var(--primary-color)] bg-[#F7F8F9] px-1 transition-all duration-200 
        } ${error ? "text-red-500" : ""}`}
      >
        {label}
        {props.required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full box-border text-sm px-3 py-2 pt-3 text-gray-700 bg-[#F7F8F9] border border-gray-300 rounded-md focus:outline-none focus:ring-1 transition-all duration-400 focus:ring-[var(--primary-color)] focus:border-transparent placeholder:text-gray-400 ${
          error ? "border-red-500 focus:ring-red-500" : ""
        }`}
      />
    </div>
  );
};

