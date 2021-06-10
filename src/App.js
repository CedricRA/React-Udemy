import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const isShowCart = useSelector(state => state.cart.show);
  return (
    <Layout>
      {isShowCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
