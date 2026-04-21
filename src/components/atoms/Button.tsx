import React from "react";

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  isLoading = false,
}) => {
  const base = "px-4 py-2.5 rounded-md font-semibold transition-all duration-300 flex items-center justify-center";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-sm",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-95",
  };

  return (
    <button
      type={type}
      disabled={isLoading}
      className={`${base} ${styles[variant]} ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        label
      )}
    </button>
  );
};
