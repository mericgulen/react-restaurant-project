import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import Loader from '../components/Loader';
import Error from '../components/Error';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import { getRestData } from '../redux/actions/resrActions';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoding, isError, restaurants } = useSelector(
    store => store.restaurant
  );

  const retry = () => {
    dispatch(getRestData());
  };

  return (
    <div className="bg-slate-800 p-5 min-h-screen -z-50">
      <Container>
        <p className="flex justify-end items-center gap-2">
          <span className="font-bold text-xl">{restaurants.length} </span>
          restaurants found
        </p>
        <div>
          {isLoding ? (
            <Loader />
          ) : isError ? (
            <Error msg={isError} retry={retry} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
              {restaurants.map(item => (
                <RestaurantCard data={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
