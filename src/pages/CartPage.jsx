import { useSelector } from 'react-redux';
import Container from '../components/Container';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';

const CartPage = () => {
  const { loading, error, cart } = useSelector(store => store.cart);

  const totalAmount = cart.reduce((total, curr) => total + curr.amount, 0);

  const totalPrice = cart.reduce(
    (total, curr) => total + curr.amount * curr.price,
    0
  );
  console.log(totalPrice);

  return (
    <div className="bg-slate-800   min-h-screen -z-50">
      <Container>
        <h1 className="text-lg my-14 ">Your Cart</h1>

        <div>
          {loading ? (
            <Loader />
          ) : error ? (
            <Error msg={error} />
          ) : cart.length === 0 ? (
            <p className="mt-20 flex flex-col gap-8 items-center text-xl">
              No product in the cart.
              <Link
                to={'/'}
                className="px-4 py-2 text-red-300 border   transition duration-500 hover:border hover:text-slate-200 hover:border-red-300 rounded-lg "
              >
                Add product
              </Link>
            </p>
          ) : (
            <div className="flex justify-center max-lg:flex-col  gap-16  ">
              <div className="w-full grid grid-cols-1 gap-10 max-w-[700px] max-sm:w-full  max-lg:mx-auto">
                {cart?.map(item => (
                  <CartItem data={item} key={item.id} />
                ))}
              </div>
              <div className="max-lg:self-end w-[250px] h-fit   bg-slate-700 shadow shadow-slate-500 rounded-lg p-4 flex flex-col gap-2 ">
                <h1 className="text-xl mb-4 font-semibold">Order Details</h1>
                <p>
                  Total Amount :
                  <span className="ms-2 text-lg font-semibold">
                    {totalAmount}
                  </span>
                </p>
                <p>
                  Total Price :
                  <span className="ms-2 text-xl font-semibold">
                    ${totalPrice.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
