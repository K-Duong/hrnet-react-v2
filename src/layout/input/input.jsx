const InputLayout = ({ children }) => {
  return (
    <div className="input-wrapper flex flex-col gap-y-2 w-1/2 ">
      {children}
    </div>
  );
};

export default InputLayout;