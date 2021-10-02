import "./App.css";
import "./assets/fonts/font-faces.css";

import { ProductList } from "./ProductList";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      {ProductList.map((value, index) => {
        return <ProductCard item={value} key={index} />;
      })}
    </div>
  );
}

export default App;
