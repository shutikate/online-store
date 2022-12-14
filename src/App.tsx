import Navigation from "./pages/navigation/navigation.page";
import ShoppingCart from "./pages/shopping-cart/shopping-cart.page";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Test from "./pages/test/test.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="shopcart" element={<ShoppingCart />} />
        <Route path="/" element={<Test />} />
      </Route>
    </Routes>
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
