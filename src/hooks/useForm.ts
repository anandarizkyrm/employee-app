import { employeeList } from '../atoms';
import { useAtom } from 'jotai';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import toast from 'react-hot-toast';

export interface EmployeeTypes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  username: string;
  birtdate: string;
  basic_salary: string;
  group: string;
  description: string;
  birthdate: string;
}

export const useForm = () => {
  const [formInput, setFormInput] = useState({
    Firstname: '',
    Lastname: '',
    Email: '',
    Gender: '',
    Username: '',
    Birtdate: '',
    Salary: '',
    Group: '',
    Description: '',
  });
  const [employee, setEmployee]: any = useAtom(employeeList);

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (new Date(formInput.Birtdate) > new Date()) {
      return toast.error('Birthdate not Valid');
    }

    const id = nanoid();

    const formValue = {
      id: id,
      first_name: formInput.Firstname,
      last_name: formInput.Lastname,
      email: formInput.Email,
      gender: formInput.Gender,
      username: formInput.Username,
      birtdate: new Date(formInput.Birtdate).toLocaleDateString('en-US'),
      basic_salary: formInput.Salary,
      group: formInput.Group,
      description: formInput.Description,
    };
    setEmployee([formValue, ...employee]);
    setFormInput({
      Firstname: '',
      Lastname: '',
      Email: '',
      Gender: '',
      Username: '',
      Birtdate: '',
      Salary: '',
      Group: '',
      Description: '',
    });
    return toast.success('Sucess Input Data');
  };

  const handleEdit = (e: any, id: number) => {
    e.preventDefault();
    if (new Date(formInput.Birtdate) > new Date()) {
      return toast.error('Birthdate not Valid');
    }

    const formValue = {
      id: id,
      first_name: formInput.Firstname,
      last_name: formInput.Lastname,
      email: formInput.Email,
      gender: formInput.Gender,
      username: formInput.Username,
      birtdate: new Date(formInput.Birtdate).toLocaleDateString('en-US'),
      basic_salary: formInput.Salary,
      group: formInput.Group,
      description: formInput.Description,
    };
    const edited = employee.map((item: EmployeeTypes) => {
      if (item.id == id) {
        return formValue;
      } else {
        return item;
      }
    });

    setEmployee(edited);

    return toast.success('Sucess Input Data');
  };
  return {
    formInput,
    setFormInput,
    handleChange,
    handleEdit,
    handleSubmit,
  };
};
