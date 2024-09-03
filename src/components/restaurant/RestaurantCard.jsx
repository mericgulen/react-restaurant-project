import { Link } from 'react-router-dom';
import { FaStar, FaClock } from 'react-icons/fa6';
import { MdDeliveryDining } from 'react-icons/md';

const RestaurantCard = ({ data, isRow }) => {
  return (
    <Link
      to={`/restaurants/${data.id}`}
      className="px-3 py-2 shadow hover:shadow-slate-400 rounded-lg overflow-hidden cursor-pointer transition duration-500 relative"
    >
      <p className="flex items-center bg-red-500 absolute top-2 end-1 px-3 py-[3px] rounded-md text-sm">
        <span>{data.distance}</span>
        <span className="max-sm:text-xs "> km away</span>
      </p>

      <img
        src={data.photo}
        alt={data.restaurant_name}
        className={` w-full max-h-[300px] object-cover rounded-lg' }`}
      />

      <div className="flex flex-col gap-2 py-4">
        <div className="flex justify-between">
          <h1 className="text-lg md:text-xl">{data.restaurant_name}</h1>
          <p className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span>{data.rating}</span>
          </p>
        </div>
        <div className="flex items-center text-sm gap-10">
          <p className="flex items-center gap-1">
            <span className="text-slate-400">${data.minimum_price}</span>
            <span className="text-sm">min</span>
          </p>
          <span className="text-red-500 font-semibold">{data.category}</span>
        </div>
        <div className="flex justify-between items-center gap-8 text-sm">
          <p className="flex items-center gap-1">
            <FaClock />
            <span>{data.estimated_delivery_time}</span>
          </p>
          {data.free_delivery && (
            <p className="flex items-center gap-1">
              <MdDeliveryDining className="text-lg md:text-xl text-red-500" />{' '}
              <span className="font-bold text-slate-400">Free</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
