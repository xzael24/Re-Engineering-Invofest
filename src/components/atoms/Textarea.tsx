import React from "react";

interface TextareaProps {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  error?: string;
  placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  register,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-700">{label}</label>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className={`border rounded-md px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${
          error ? "border-red-500 ring-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
