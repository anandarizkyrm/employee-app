import React from 'react';

const InputWithDropdown = ({
  label,
  label2,
  placeholder,
  type,
  listname,
  list,
  ...props
}: any) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <label className="input-group">
        <span>{label2}</span>
        <input
          list={listname}
          type={type}
          {...props}
          name={label2}
          placeholder={placeholder}
          className="input input-bordered w-full"
        />
        <datalist name={label2} {...props} id={listname}>
          {list?.map((item: any) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </datalist>
      </label>
    </div>
  );
};

export default InputWithDropdown;
