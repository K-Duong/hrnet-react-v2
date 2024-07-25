import { replaceWhiteSpace, convertStringToLowerCase } from "../../utils/convertString";

const SelectItem = ({ label, id, className, name, value, options, handleSelect }) => {
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
            key={replaceWhiteSpace(convertStringToLowerCase(option))}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectItem;
