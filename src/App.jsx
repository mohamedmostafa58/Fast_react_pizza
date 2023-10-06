import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './features/ui/Home';
import Menu from './features/menu/Menu';
import Applayout from './features/ui/Applayout';
import Cart from './features/cart/Cart';
import { loader as menuloader } from './features/menu/Menu';
import Error from './features/ui/Error';
import CreateOrder, {
  action as orderaction,
} from './features/order/CreateOrder';
import Order, { loader as orderloader } from './features/order/Order';
const routes = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuloader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: orderaction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderloader,
        errorElement: <Error />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
