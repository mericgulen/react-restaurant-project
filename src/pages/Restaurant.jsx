import Container from '../components/Container';
import RestaurantDetail from '../components/restaurant/RestaurantDetail';
import ProductList from '../components/product/ProductList';

const Restaurant = () => {
  return (
    <div className="bg-slate-800 p-3 min-h-screen   -z-50">
      <div className="shadow shadow-slate-500 mt-10 py-2 rounded-lg">
        <Container>
          <RestaurantDetail />
        </Container>
      </div>

      <Container>
        <ProductList />
      </Container>
    </div>
  );
};

export default Restaurant;
