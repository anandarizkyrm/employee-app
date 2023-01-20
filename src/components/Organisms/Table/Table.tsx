import { EmployeeTypes } from '../../../hooks/useManipulateList';
import Button from '../../Atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

const Table = ({
  data,
  handleDelete,
}: {
  data: EmployeeTypes[];
  handleDelete: any;
}) => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Gender</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td className="flex gap-2">
                <Button
                  onClick={() => navigate('/detail/' + item.id)}
                  type="info"
                  text="Detail"
                />
                <Button
                  onClick={() => navigate('/edit/' + item.id)}
                  type="warning"
                  text="Edit"
                />
                <Button
                  onClick={() => handleDelete(item.id)}
                  type="error"
                  text="Delete"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
