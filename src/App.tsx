import Navigation from "./components/navigation/navigation";
import ShoppingCart from "./pages/shopping-cart/shopping-cart";
import DescriptionCard from "./pages/product/product";
import  NotFound from "./pages/not-found/not-found";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/main/main";
import { useGetProducts } from "./hooks/use-get-products";
import { ProductsContext } from './context/products-context';

const App = () => {
  const productsData = useGetProducts();

  return (
    <ProductsContext.Provider value={productsData}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<MainPage />} />
          <Route path="shopcart" element={<ShoppingCart />} />
          <Route path="product-details/:id" element={<DescriptionCard />} />
        </Route>
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </ProductsContext.Provider>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
