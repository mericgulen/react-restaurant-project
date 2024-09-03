import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRestData } from './redux/actions/resrActions';
import Restaurant from './pages/Restaurant';
import { getCartData } from './redux/actions/cartActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestData());
    dispatch(getCartData())
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
