import { Link } from 'react-router-dom';
import Container from './Container';
import { IoRestaurant } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { BsCart4 } from 'react-icons/bs';

const Header = () => {
  const { restaurants } = useSelector(store => store.restaurant);
  const { cart } = useSelector(store => store.cart);

  /// total amount of Cart
  const totalAmountCart = cart.reduce((total, curr) => total + curr.amount, 0);

  return (
    <header className="sticky top-0 z-50 bg-slate-800 shadow shadow-slate-500">
      <Container design={'flex items-center justify-between'}>
        <Link to={'/'} className="text-2xl font-semibold">
          BestFood
        </Link>

        <div className="flex gap-4">
          <Link
            to={'/'}
            className="flex justify-end  items-center mb-0  gap-1 "
          >
            <IoRestaurant className="text-lg text-red-300" />
            <span className="ms-1 text-lg text-red-400">
              {restaurants.length}
            </span>
            <span className="text-sm max-sm:text-xs">restaurants</span>
            <span className="max-sm:hidden text-sm max-sm:text-xs">
              near you
            </span>
          </Link>

          <div className="flex justify-end items-center py-2">
            <button className="border border-transparent transition hover:border-red-500 px-4 rounded-lg py-1 max-md:hidden">
              Log In
            </button>
            <button className="border border-transparent transition hover:border-red-500 px-4 rounded-lg py-1 max-md:hidden">
              Sign Up
            </button>

            <Link to={'/cart'} className="relative text-2xl">
              <BsCart4 className="text-slate-200" />

              <span className="w-4 h-4 absolute -top-[6px] -end-2 bg-red-600 rounded-full text-slate-100 text-xs grid place-items-center ">
                {totalAmountCart}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
