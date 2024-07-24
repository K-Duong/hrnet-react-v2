const SelectItem = ({ label, id, className, name, value, options, handleSelect }) => {
  const convertNameToLowerCase = (string) => string.toLowerCase();
  const replaceWhiteSpace = (string) => string.replace(" ", "-");
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        name={name}
        id={id}
        className={className}
        value={value}
        onChange={handleSelect}
      >
        {options.map((option) => (
          
          <option
            key={replaceWhiteSpace(convertNameToLowerCase(option))}
            value={convertNameToLowerCase(option)}
          >
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectItem;
