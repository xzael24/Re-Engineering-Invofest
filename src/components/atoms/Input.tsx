import React from "react";

interface BaseInputProps {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  error?: string;
  type?: string;
  placeholder?: string;
}

export const Input: React.FC<BaseInputProps> = ({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${
          error ? "border-red-500 ring-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
