import React from 'react';

type Props = {
  value: string;
  setValue: any;
  handleSearch: any;
};

const SearchAndFilter = ({ value, setValue, handleSearch }: Props) => {
  return (
    <div className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input input-bordered "
        />
        <button onClick={() => handleSearch()} className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;
