import "./App.css";
import "./assets/font-faces.css";
import ImageTest from "./image-teste.png";

import ProductImage from "./components/ProductImage";
import ProductName from "./components/ProductName";
import ProductPrice from "./components/ProductPrice";
import ProductInstallments from "./components/ProductInstallments";
import AddToCartButton from "./components/AddToCartButton";

function App() {
  return (
    <div className="App">
      <div className="product-info">
        <ProductImage src={ImageTest} alt="Televisão" title="Televisão" />
        <ProductName
          name="Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP,
      Gsync Série CRG50"
        />
        <ProductPrice listPrice={2813.99} sellingPrice={2599.0} />
        <ProductInstallments
          installmentsTime={10}
          installmentsTimePrice={259.9}
        />
        <AddToCartButton label="Adicionar" />
      </div>
    </div>
  );
}

export default App;
