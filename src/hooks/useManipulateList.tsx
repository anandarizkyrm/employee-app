import dummy from '../../dummy.json';
import { employeeList } from '../atoms';
import { useAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export interface EmployeeTypes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  username: string;
  birtdate: string;
  basic_salary: number;
  group: string;
  description: string;
}

export const useManipulateList = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'newest' | 'asc' | 'desc' | 'default'>(
    'default'
  );
  const [totalData, setTotalData] = useState(10);
  const [page, setPage] = useState(1);

  const [employee, setEmployee]: any = useAtom(employeeList);

  const [listEmployee, setListEmployee] =
    useState<Array<EmployeeTypes>>(employee);

  const handleSearch = () => {
    setPage(1);
    if (search) {
      const searchList = [...employee].filter((item) => {
        return Object.values(item)
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      return setListEmployee(searchList);
    }
    return setListEmployee(employee);
  };

  const handleDelete = (id: number) => {
    const deleted = [...employee].filter((item: EmployeeTypes) => {
      return item.id !== id;
    });

    toast.success('Success Delete Data');

    setEmployee(deleted);
    setListEmployee(deleted);
  };

  const handleSort = useCallback(
    (type: 'newest' | 'asc' | 'desc' | 'default') => {
      let sorted = [];
      if (!listEmployee) return;
      switch (type) {
        case 'newest':
          // eslint-disable-next-line no-case-declarations
          sorted = [...listEmployee].sort((a, b) => {
            return b.id - a.id;
          });
          return setListEmployee(sorted);

        case 'default':
          // eslint-disable-next-line no-case-declarations
          sorted = [...listEmployee].sort((a, b) => {
            return a.id - b.id;
          });
          return setListEmployee(sorted);

        case 'asc':
          // eslint-disable-next-line no-case-declarations
          sorted = [...listEmployee].sort((a, b) => {
            return a.username > b.username ? 1 : -1;
          });
          return setListEmployee(sorted);
        case 'desc':
          // eslint-disable-next-line no-case-declarations
          sorted = [...listEmployee].sort((a, b) => {
            return a.username < b.username ? 1 : -1;
          });
          return setListEmployee(sorted);
      }
    },
    [sort]
  );

  useEffect(() => {
    setPage(1);
  }, [totalData]);

  useEffect(() => {
    if (!localStorage.getItem('employeList')) {
      setEmployee(dummy);
    }
  }, []);

  useEffect(() => {
    handleSort(sort);
  }, [sort]);

  useEffect(() => {
    if (!listEmployee.length) {
      setListEmployee(dummy);
    }
  }, employee);

  return {
    listEmployee,
    setListEmployee,
    search,
    setSearch,
    handleDelete,
    sort,
    setSort,
    totalData,
    setTotalData,
    handleSearch,
    page,
    setPage,
  };
};
