import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { useParams } from 'react-router-dom';
import Error from '../Error';
import Loader from '../Loader';
import { RiFireFill } from 'react-icons/ri';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get(`/products?restaurant_id=${id}`)
      .then(res => setProducts(res.data))
      .catch(err => setError(err.message));
  }, [id]);

  return (
    <div className="flex flex-col gap-8 mt-12 ">
      {error ? (
        <Error msg={error} />
      ) : !product ? (
        <Loader />
      ) : product.length === 0 ? (
        <p className="text-slate-300 max-sm:text-sm mt-10 text-center">
          Restaurant is out of service hours
        </p>
      ) : (
        <>
          <div className="flex flex-col gap-4 mt-8">
            <h2 className="flex items-center gap-3 text-2xl">
              <RiFireFill className="text-red-500" />
              <span>Popular</span>
            </h2>
            <p className="text-slate-300 max-sm:text-sm">
              The restaurant's most preferred flavors
            </p>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12  mt-10">
            {product.map(item => (
              <ProductCard data={item} key={item.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
