import Button from '../components/Atoms/Button/Button';
import Pagination from '../components/Molecules/Pagination/Pagination';
import Sort from '../components/Molecules/Sort/Sort';
import SearchFilterAndSort from '../components/Organisms/SearchFIlterAndSort/SearchFilterAndSort';
import Table from '../components/Organisms/Table/Table';
import { useManipulateList } from '../hooks/useManipulateList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const {
    search,
    setSearch,
    handleSearch,
    listEmployee,
    setSort,
    totalData,
    setTotalData,
    handleDelete,
    page,
    setPage,
  } = useManipulateList();
  const navigate = useNavigate();
  return (
    <section className="mt-24  w-full flex flex-col justify-between h-72 items-center">
      <div className="w-full flex justify-between">
        <Button
          onClick={() => navigate('/addemployee')}
          type="info"
          text="Add Employee"
        />
        <div className="flex gap-2">
          <SearchFilterAndSort
            setSearch={setSearch}
            value={search}
            handleSearch={handleSearch}
          />
          <Sort
            list={['default', 'newest', 'asc', 'desc']}
            label={'Sort'}
            setSort={setSort}
          />
          <Sort list={['10', '25', '50']} setSort={setTotalData} />
        </div>
      </div>
      <div className="w-full mt-12 ">
        <Table
          handleDelete={handleDelete}
          data={listEmployee.slice((page - 1) * totalData, totalData * page)}
        />
        <div className="flex items-center w-full  justify-center my-12">
          <Pagination
            page={page}
            setPage={setPage}
            list={listEmployee.slice(
              Math.floor(0),
              Math.ceil(listEmployee.length / totalData)
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
