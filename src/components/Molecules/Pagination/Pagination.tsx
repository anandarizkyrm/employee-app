import React from 'react';

const Pagination = ({
  page,
  list,
  setPage,
}: {
  page: number;
  list: any[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="btn-group">
      {list?.map((n, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`btn ${page === i + 1 ? 'btn-active' : null}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
