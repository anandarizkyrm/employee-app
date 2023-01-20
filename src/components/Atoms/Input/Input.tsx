import React from 'react';

const Input = ({ label, label2, placeholder, type, ...props }: any) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <label className="input-group w-full ">
        <span>{label2}</span>
        <input
          {...props}
          name={label2}
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full"
        />
      </label>
    </div>
  );
};

export default Input;
