import React from "react";

interface SelectProps {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  error?: string;
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  register,
  error,
  options,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-700">{label}</label>
      <select
        {...register(name)}
        className={`border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${
          error ? "border-red-500 ring-red-500" : "border-gray-300"
        }`}
      >
        <option value="">Pilih...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
