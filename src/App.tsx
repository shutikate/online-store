import Navigation from "./pages/navigation/navigation.page";
import ShoppingCart from "./pages/shopping-cart/shopping-cart.page";
import  NotFound from "./pages/not-found/not-found";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/main.page";
import { useGetProducts } from "./hooks/useGetProducts";
import { ProductsContext } from './context/productsContext';

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
