import { useState } from "react";
import { data } from "./data";
import logo from "./images/logo.svg";
import avatar from "./images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
      <div className="flex items-center justify-start gap-4">
        <img src={logo} alt="" />
        <nav>
          <ul className="flex items-center justify-start gap-4">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      <div>
        <ul className="flex items-center justify-start gap-4">
          <li>
            <button>
              <AiOutlineShoppingCart />
            </button>
          </li>
          <li>
            <img src={avatar} alt="" className="w-12" />
          </li>
        </ul>
      </div>
    </header>
  );
}

function App() {
  const [products] = useState(data);
  const [imageSelection, setImageSelection] = useState(0);

  const { mainImage } = products[imageSelection];

  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <article>
          <img src={mainImage} alt="" />

          <ul className="flex items-center justify-start gap-3 flex-wrap">
            {products.map((product, index) => (
              <li key={product.id} onClick={() => setImageSelection(index)}>
                <img src={product.thumbnail} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>

        <article>Lorem ipsum dolor sit amet.</article>
      </section>
    </>
  );
}

export default App;
