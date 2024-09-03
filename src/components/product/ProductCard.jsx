import { CiCirclePlus } from 'react-icons/ci';
import {
  addProductToCart,
  updateAmoutOfProduct,
} from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ data }) => {
  //  console.log(data);
  const { cart } = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const amountOfProduct = cart.find(item => item.productId === data.id);

  //- console.log(amountOfProduct);

  const handleAddProduct = () => {
    amountOfProduct
      ? dispatch(
          updateAmoutOfProduct(amountOfProduct.id, amountOfProduct.amount + 1)
        )
      : dispatch(addProductToCart(data));
  };
  return (
    <div className="grid grid-cols-[1fr_200px] max-sm:grid-cols-[1fr_150px] shadow rounded-lg gap-3 transition duration-500 hover:scale-[1.02] hover:shadow-slate-600 cursor-pointer border border-slate-700 p-4 ">
      <div className="flex flex-col justify-between  ">
        <div>
          <h1 className="max-sm:text-lg text-xl font-semibold ">
            {data.title}
          </h1>
          <p className="line-clamp-1 my-2 text-slate-400">{data.description}</p>
        </div>
        <p className="text-lg font-semibold">${data.price}</p>
      </div>

      <div className=" relative rounded-lg ">
        <img
          src={data.photo}
          className="w-full h-full  object-cover rounded-lg"
        />

        <button
          onClick={handleAddProduct}
          className="absolute end-1 bottom-[6px]  size-8 grid place-items-center rounded-full bg-red-500"
        >
          {amountOfProduct ? (
            <span className="font-semibold">{amountOfProduct.amount}</span>
          ) : (
            <CiCirclePlus className="text-3xl font-semibold  bg-red-500 rounded-full " />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
