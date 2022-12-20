import Navigation from "./components/navigation/navigation";
import ShoppingCart from "./pages/shopping-cart/shopping-cart";
import  NotFound from "./pages/not-found/not-found";
import { Route, Routes } from "react-router-dom";
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
          <Route path="*" element={<NotFound />} />
        </Route>
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
