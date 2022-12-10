import logo from './logo.svg';
import './App.css';
import Button from './components/Button/index.tsx';
import Wishlist from './components/WishlistButton/index.tsx';
import { useState } from 'react';
import Card from './components/Card/index.tsx';

function App() {

  const [clicked, setClicked] = useState(false);

  const products = [
    {
      name: "Smartphone Samsung Galaxy S20 FE 5G 128GB Snapdragon Tela 6.5'' Dual Chip 6GB RAM Câmera Tripla + Selfie 32MP - Branco",
      image: "https://images-americanas.b2w.io/produtos/01/00/img/4820514/7/4820514761_1SZ.jpg",
      price: 1999.99,
      oldPrice: 2399.99,
      isFav: true,
      isOrder: true
    },
    {
      name: "Smartphone Samsung Galaxy A03 64GB 4GB RAM Processador Octa Core 48MP + 2MP 5MP Tela Infinita de 6.5'' Dual Chip Android - Preto",
      image: "https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_2SZ.jpg",
      price: 1979.10,
      oldPrice: 2199.99,
      isFav: false,
      isOrder: false
    }
  ]

  return (
    <div className="App">
      {products.map((product) => (
        <Card
          productName={product.name}
          image={product.image}
          oldPrice={product.oldPrice}
          currentPrice={product.price}
          dividedBy={10}
          value={product.price}

        />
      ))}
    </div>
  );
}

export default App;
