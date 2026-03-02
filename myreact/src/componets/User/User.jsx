import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="flex justify-center items-center bg-gray-600 p-4 text-4xl text-white">
      User: {userid}
    </div>
  );
};

export default User;
