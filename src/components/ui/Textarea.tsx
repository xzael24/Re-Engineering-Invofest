import React from "react";

interface TextareaProps {
  label: string;
  name: string;

  register: any;

  rules?: any;
  error?: string;
  placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  register,
  rules,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-700">{label}</label>
      <textarea
        {...register(name, rules)}
        placeholder={placeholder}
        className={`border rounded-md px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${
          error ? "border-red-500 ring-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
