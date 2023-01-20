import { employeeList } from '../atoms';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

export interface EmployeeTypes {
  id: number | string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  username: string;
  birtdate: string;
  basic_salary: string;
  group: string;
  description: string;
}

export const useGetDetail = (id: string) => {
  const [employee]: any = useAtom(employeeList);

  const [detail, setDetail] = useState();

  const getById = () => {
    if (id) {
      const get = employee.filter((item: EmployeeTypes) => {
        return item.id == id;
      });

      setDetail(get);
    }
  };

  useEffect(() => {
    getById();
  }, []);
  return {
    detail,
  };
};
