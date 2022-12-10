import logo from './logo.svg';
import './App.css';
import Button from './components/Button/index.tsx';
import Wishlist from './components/WishlistButton/index.tsx';
import { useState } from 'react';

function App() {

  const [clicked, setClicked] = useState(false);

  const products = [
    {
      name: "'Smart TV 50' Crystal UHD 4K Samsung 50BU8000 Painel Dynamic Crystal Color Design Slim Tela sem Limites Alexa Built in Controle Remoto Único",
      image: "https://images-americanas.b2w.io/produtos/01/00/img/4878250/4/4878250438_2SZ.jpg",
      price: 1999.99,
      oldPrice: 2399.99,
      isFav: true,
      isOrder: true
    },
    {
      name: "Smartwatch Galaxy Watch5 Bt 40mm - Rose",
      image: "https://images-americanas.b2w.io/produtos/01/00/img/5653993/4/5653993417_1SZ.jpg",
      price: 1979.10,
      oldPrice: 2199.99,
      isFav: false,
      isOrder: false
    }
  ]

  console.log(products)
  return (
    <div className="App">
      <div>

        <Button isClicked={clicked} label="ADICIONAR" onClick={() => setClicked(!clicked)} />
      </div>
      <div>
        <Wishlist />
      </div>

    </div>
  );
}

export default App;
