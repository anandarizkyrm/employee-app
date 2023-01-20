import { EmployeeTypes } from '../../../hooks/useForm';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';
import InputTextarea from '../../Atoms/Input/InputTextarea';
import InputWithDropdown from '../../Atoms/Input/InputWithDropdown';
import { toMoney } from '../../utils/formatter';
import { useNavigate } from 'react-router-dom';

const FormDetail = ({ data }: { data: EmployeeTypes }) => {
  const navigate = useNavigate();

  return (
    <>
      <form className="flex flex-wrap grid grid-cols-2 gap-4">
        <Input
          disabled
          placeholder="Username"
          label="Employee Username"
          label2="Username"
          value={data.username}
          required
          type={'text'}
        />
        <Input
          disabled
          placeholder="First Name"
          label="Employee FirstName"
          label2="Firstname"
          value={data.first_name}
          required
          type={'text'}
        />
        <Input
          disabled
          placeholder="Last Name"
          label="Employee LastName"
          label2="Lastname"
          value={data.last_name}
          required
          type={'text'}
        />

        <Input
          disabled
          placeholder="Email"
          label="Employee Email"
          label2="Email"
          value={data.email}
          required
          type={'email'}
        />

        <Input
          disabled
          placeholder="Rp."
          label="Employee Basic Salary"
          label2="Salary"
          value={'Rp. ' + toMoney(data.basic_salary)}
          required
          type={'text'}
        />

        <Input
          disabled
          placeholder="birtdate"
          label="Employee birtdate"
          label2="Birtdate"
          defaultValue={new Date(data.birtdate).toISOString().substr(0, 10)}
          // value={new Date(data.birtdate)}
          required
          type={'date'}
        />

        <InputWithDropdown
          disabled
          placeholder="Group"
          label="Employee Group"
          label2="Group"
          value={data.group}
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
          disabled
          placeholder="Gender"
          label="Employee Gender"
          value={data.gender}
          label2="Gender"
          listname="Gender"
          required
          list={['Male', 'Female']}
        />

        <InputTextarea
          disabled
          placeholder="Description"
          label="Employee Description"
          label2="Description"
          value={data.description}
          required
        />
        <div className="flex justify-end gap-4 w-full col-span-2 mt-4">
          <Button onClick={() => navigate('/')} text="Back" type="info" />
        </div>
      </form>
    </>
  );
};

export default FormDetail;
