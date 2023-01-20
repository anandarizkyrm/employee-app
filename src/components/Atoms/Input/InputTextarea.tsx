import React from 'react';

const InputTextarea = ({ label, label2, placeholder, ...props }: any) => {
  return (
    <div className="form-control w-full  col-span-2">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <label className="input-group w-full ">
        <span>{label2}</span>
        <textarea
          {...props}
          name={label2}
          placeholder={placeholder}
          className="input input-bordered w-full h-52"
        />
      </label>
    </div>
  );
};

export default InputTextarea;
