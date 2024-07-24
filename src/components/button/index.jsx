function Button({ className, handleClick, children, type, disabled=false }) {
  return (
    <button
      type={type}
      className={`bg-reseda-green p-2 rounded-lg text-white ${className} ${disabled ? "cursor-not-allowed opacity-30" : " hover:bg-yellow-600 font-bold"} `}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
