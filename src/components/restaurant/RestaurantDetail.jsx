import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import { FaStar, FaClock, FaArrowDown } from 'react-icons/fa6';

const RestaurantDetail = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    api
      .get(`/restaurants/${id}`)
      .then(res => setRestaurant(res.data))
      .catch(err => console.log(err.message));
  }, [id]);

  if (!restaurant) return <Loader />;
  return (
    <div className="flex max-sm:gap-10 gap-14  max-sm:flex-col max-sm:items-center ">
      <img
        src={restaurant.photo}
        alt={restaurant.restaurant_name}
        className="w-[200px] max-sm:w-[250px] object-cover rounded-lg"
      />
      <div className="flex flex-col  items-start gap-4 ">
        <h1 className="text-2xl">{restaurant.restaurant_name}</h1>

        <div className="flex flex-col gap-3">
          <p className="flex  items-center gap-3">
            <FaArrowDown className="text-red-500" />
            <span>${restaurant.minimum_price}</span>
          </p>
          <p className="flex   items-center gap-3">
            <FaClock className="text-red-500" />
            <span>{restaurant.estimated_delivery_time}</span>
          </p>
        </div>

        <p className="flex items-center gap-3">
          <FaStar className="text-yellow-500" />
          <span>{restaurant.rating}</span>
          <button className="text-slate-400 transition hover:text-red-500 text-sm ms-4">
            See Comments
          </button>
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetail;
