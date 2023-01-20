import { EmployeeTypes, useForm } from '../../../hooks/useForm';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';
import InputTextarea from '../../Atoms/Input/InputTextarea';
import InputWithDropdown from '../../Atoms/Input/InputWithDropdown';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormEdit = ({ data }: { data: EmployeeTypes }) => {
  const { handleChange, handleEdit, formInput, setFormInput } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setFormInput({
      Firstname: data.username,
      Lastname: data.last_name,
      Email: data.email,
      Gender: data.gender,
      Username: data.username,
      Birtdate: data.birtdate,
      Salary: data.basic_salary,
      Group: data.group,
      Description: data.description,
    });
  }, []);

  if (!data && !formInput) return null;

  return (
    <>
      <form
        onSubmit={(e) => handleEdit(e, data?.id)}
        className="flex flex-wrap grid grid-cols-2 gap-4"
      >
        <Input
          placeholder="Username"
          label="Employee Username"
          label2="Username"
          value={formInput.Username}
          onChange={(e: any) => handleChange(e)}
          required
          type={'text'}
        />
        <Input
          placeholder="First Name"
          label="Employee FirstName"
          label2="Firstname"
          value={formInput.Firstname}
          onChange={(e: any) => handleChange(e)}
          required
          type={'text'}
        />
        <Input
          placeholder="Last Name"
          label="Employee LastName"
          label2="Lastname"
          value={formInput.Lastname}
          onChange={(e: any) => handleChange(e)}
          required
          type={'text'}
        />

        <Input
          placeholder="Email"
          label="Employee Email"
          label2="Email"
          value={formInput.Email}
          onChange={(e: any) => handleChange(e)}
          required
          type={'email'}
        />

        <Input
          placeholder="Rp."
          label="Employee Basic Salary"
          label2="Salary"
          value={formInput.Salary}
          onChange={(e: any) => handleChange(e)}
          required
          type={'number'}
        />

        <Input
          placeholder="birtdate"
          label="Employee birtdate"
          label2="Birtdate"
          value={
            formInput?.Birtdate &&
            new Date(formInput?.Birtdate).toISOString().substr(0, 10)
          }
          defaultValue={new Date(data.birtdate).toISOString().substr(0, 10)}
          onChange={(e: any) => handleChange(e)}
          required
          type={'date'}
        />

        <InputWithDropdown
          placeholder="Group"
          label="Employee Group"
          label2="Group"
          value={formInput.Group}
          onChange={(e: any) => handleChange(e)}
          listname="group"
          required
          list={[
            'Research Associate',
            'Web Developer III',
            'VP Sales',
            'Sales Representative',
          ]}
        />

        <InputWithDropdown
          placeholder="Gender"
          label="Employee Gender"
          value={formInput.Gender}
          onChange={(e: any) => handleChange(e)}
          label2="Gender"
          listname="Gender"
          required
          list={['Male', 'Female']}
        />

        <InputTextarea
          placeholder="Description"
          label="Employee Description"
          label2="Description"
          value={formInput.Description}
          onChange={(e: any) => handleChange(e)}
          required
        />
        <div className="flex justify-end gap-4 w-full col-span-2 mt-4">
          <Button onClick={() => navigate('/')} text="Back" type="info" />
          <Button text="Submit" type="submit" />
        </div>
      </form>
    </>
  );
};

export default FormEdit;
