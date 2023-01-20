import SearchAndFilter from '../../Molecules/SearchAndFilter/SearchAndFilter';
import React from 'react';

type Props = {
  value: string;
  setSearch: any;
  handleSearch: any;
};

const SearchFilterAndSort = ({ value, setSearch, handleSearch }: Props) => {
  return (
    <div>
      <SearchAndFilter
        value={value}
        setValue={setSearch}
        handleSearch={handleSearch}
      />
      {/* <Sort /> */}
    </div>
  );
};

export default SearchFilterAndSort;
