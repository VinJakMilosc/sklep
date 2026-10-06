import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="nazwaSklepu">
        <h1 className="nazwaSklepu">magasin de vêtements</h1>
      </header>
      <aside className="kategorie">
        <img src="public/shoplogo.png" alt="logo" className="logo" />
        <hr />
        <h1>Kategorie</h1>
        <hr />
        <li><a href="#">Męskie</a></li>
        <li><a href="#">Damskie</a></li>
        <li><a href="#">Dziecięce</a></li>
        <li><a href="#">Sportowe</a></li> 
        <hr />
        <h1>Socjale</h1>
      </aside>
      <main className="produkty">
        <div className="main">
       <div className="products">
          <img src="public/images.jpg" alt="product" className="rzecz"/>
          <button> Dodaj do koszyka</button>
        </div>
        <div className="products">
          <img src="public/pobrane.webp" alt="product" className="rzecz" />
          <button> Dodaj do koszyka</button>
        </div>
        <div className="products">
          <img src="public/hoodie.avif" alt="product" className="rzecz" />
          <button> Dodaj do koszyka</button>
        </div>
        <div className="products">
          <img src="public/kurtka.avif" alt="product" className="rzecz" />
          <button> Dodaj do koszyka</button>
        </div>
        
        </div>
      </main>
      <footer>
        <span><a href="#">Regulamin</a></span>
        <span><a href="#">Contact us</a></span>
        <span><a href="#">Faq</a></span>
        <span><a href="#">Więcej informacji</a></span>
      </footer>

    </>
  )
}

export default App
