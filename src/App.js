import "./App.css";
import "./assets/font-faces.css";
import ImageTeste from "./image-teste.png";

function App() {
  return (
    <div className="App">
      <div className="product-info">
        <div className="product-images">
          <img src={ImageTeste} className="product-image" />
        </div>
        <div className="product-name">
          Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP,
          Gsync Série CRG50
        </div>
        <div className="product-price">
          <div className="product-list-price">R$ 2.813,99</div>
          <div className="product-selling-price">R$ 2.599,00</div>
        </div>
        <div className="product-installments">
          <div>
            em até{" "}
            <span className="product-installments-info">10x de R$ 259,90</span>{" "}
            sem juros
          </div>
        </div>
        <button class="add-to-cart-button">Adicionar</button>
      </div>
    </div>
  );
}

export default App;
