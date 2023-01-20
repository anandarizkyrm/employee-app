import FormDetail from '../components/Organisms/Form/FormDetail';
import { useGetDetail } from '../hooks/useGetDetail';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  if (!id) return null;

  const { detail } = useGetDetail(id);
  return (
    <div className="mt-24  w-full flex flex-col justify-between items-center ">
      <div className="shadow-2xl w-full h-full p-12">
        <h1 className="font-extralight text-6xl mb-12">Detail Employee Form</h1>
        {detail ? <FormDetail data={detail[0]} /> : null}
      </div>
    </div>
  );
};

export default Detail;
