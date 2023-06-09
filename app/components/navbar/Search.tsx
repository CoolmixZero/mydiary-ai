"use client";

interface SearchProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Search: React.FC<SearchProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <div>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-blue-400" : "border-neutral-300"}
          ${errors[id] ? "focus:border-blue-400" : "focus:border-black"}
          `}
      />
      <label
        className={`
        absolute 
        text-md
        duration-150 
        transform 
        -translate-y-3 
        top-5 
        z-10 
        origin-[0] 
        ${formatPrice ? "left-9" : "left-4"}
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? "text-blue-400" : "text-zinc-400"}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Search;
