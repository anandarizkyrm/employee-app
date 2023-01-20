import React from 'react';

type Props = {
  label?: string;
  list: string[];
  setSort: any;
};

const Sort = ({ label, list, setSort }: Props) => {
  return (
    <div className="form-control">
      <div className="input-group">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="select select-bordered"
        >
          <option disabled>{label}</option>
          {list.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        {/* <button className="btn">Go</button> */}
      </div>
    </div>
  );
};

export default Sort;
