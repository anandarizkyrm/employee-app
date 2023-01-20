import FormAdd from '../components/Organisms/Form/FormAdd';

const AddEmployee = () => {
  return (
    <div className="mt-24  w-full flex flex-col justify-between items-center ">
      <div className="shadow-2xl w-full h-full p-12">
        <h1 className="font-extralight text-6xl mb-12">Add Employee Form</h1>
        <FormAdd />
      </div>
    </div>
  );
};

export default AddEmployee;
