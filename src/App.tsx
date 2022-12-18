import Navigation from "./pages/navigation/navigation.page";
import ShoppingCart from "./pages/shopping-cart/shoppingCart";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/main";
import { useProducts } from "./hooks/useProducts";
import { ProductsContext } from './context/productsContext';

const App = () => {
  const productsData = useProducts();

  return (
    <ProductsContext.Provider value={productsData}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="shopcart" element={<ShoppingCart />} />
          <Route path="/" element={<MainPage />} />
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
