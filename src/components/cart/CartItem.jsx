import { FaTrashAlt } from 'react-icons/fa';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import {
  addProductToCart,
  deleteProduct,
  updateAmoutOfProduct,
} from '../../redux/actions/cartActions';

const CartItem = ({ data }) => {
  //-  console.log(data);

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(updateAmoutOfProduct(data.id, data.amount + 1));
  };

  const handleDelete = () => {
    data.amount > 1
      ? dispatch(updateAmoutOfProduct(data.id, data.amount - 1))
      : dispatch(deleteProduct(data.id));
  };

  return (
    <div className=" flex gap-10  max-sm:flex-col rounded-lg p-4 shadow transition duration-500 hover:scale-[1.02] hover:shadow-slate-600 cursor-pointer">
      <img
        src={data.photo}
        className="max-sm:self-center   rounded-lg object-cover w-[150px] max-sm:w-full max-sm:h-[250px]"
      />

      <div className="w-full  flex flex-col   ">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{data.title}</h1>
          <p className="text-slate-400">{data.restaurantName}</p>
        </div>

        <div className="flex items-center justify-between max-sm:mt-5">
          <p className="self-end text-xl">${data.price}</p>
          <div className="flex   shadow shadow-red-400 rounded-lg  bg-slate-700">
            <button
              onClick={handleDelete}
              className="py-1 px-4 text-xl text-red-500"
            >
              {data.amount > 1 ? <FaMinus /> : <FaTrashAlt />}
            </button>
            <span className="py-2 px-4 text-2xl">{data.amount}</span>
            <button
              onClick={handleAddProduct}
              className="py-1 px-4 text-xl text-red-500"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
