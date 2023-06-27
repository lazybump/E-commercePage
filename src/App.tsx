import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import Header from "./components/Header";
import Lightbox from "./components/Lightbox";
import Gallery from "./components/Gallery";
import { data } from "./data";
import Menu from "./components/Menu";
import productThumbnail from "./images/image-product-1-thumbnail.jpg";

export interface ProductsType {
  id: number;
  mainImage: string;
  thumbnail: string;
}

export interface CartItem {
  name: string;
  price: number;
  thumbnail: string;
}

function App() {
  const [quantity, setQuantity] = useState<number>(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (event: React.MouseEvent<HTMLElement>) => {
    const { name } = event.target as HTMLButtonElement;
    if (name === "add-to-cart-btn") {
      setCart([
        {
          name: "Fall Limited Edition Sneakers",
          price: 125,
          thumbnail: productThumbnail,
        },
      ]);
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  const removeFromCart = (event: React.MouseEvent<HTMLElement>) => {
    const { name } = event.target as HTMLButtonElement;
    if (name === "bin-btn") {
      setCart([]);
      setQuantity(1);
    } else setQuantity((prev) => prev - 1);
  };

  return (
    <>
      {isLightboxOpen && (
        <Lightbox
          isLightboxOpen={isLightboxOpen}
          setIsLightboxOpen={setIsLightboxOpen}
          products={data}
        />
      )}

      {/* This is the overlay for the mobile menu */}
      <div
        className={`bg-black absolute inset-0 z-30 pointer-events-none transition-opacity duration-700 ${
          isMenuOpen ? "opacity-70" : "opacity-0"
        }`}
      ></div>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Header
        setIsMenuOpen={setIsMenuOpen}
        cart={cart}
        quantity={quantity}
        removeFromCart={removeFromCart}
      />
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:place-items-center lg:py-20 gap-20">
        <article>
          <Gallery setIsLightboxOpen={setIsLightboxOpen} products={data} />
        </article>

        <article className="px-8 pb-10">
          <h2 className="text-orange-400 uppercase tracking-widest text-sm font-bold mb-10">
            Sneaker Company
          </h2>
          <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-5xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-slate-600 mb-10 leading-relaxed">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">$125.00</li>
              <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
                50%
              </li>
            </ul>
            <p className="text-slate-600 text-sm">
              <s>$250.00</s>
            </p>
          </div>

          <div className="mt-10 lg:flex lg:gap-4">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow grow">
              <li className="flex">
                <button
                  name="minus-btn"
                  onClick={() => setQuantity((prev) => prev - 1)}
                  disabled={quantity === 1}
                  className="active:scale-110"
                >
                  <img
                    src={minus}
                    alt="Minus icon"
                    className={`pointer-events-none ${
                      quantity === 1 && "opacity-30"
                    }`}
                  />
                </button>
              </li>
              <li className="w-6 text-center font-bold">{quantity}</li>
              <li>
                <button
                  name="plus-btn"
                  onClick={addToCart}
                  className="active:scale-110"
                >
                  <img
                    src={plus}
                    alt="Plus icon"
                    className="pointer-events-none"
                  />
                </button>
              </li>
            </ul>
            <button
              name="add-to-cart-btn"
              onClick={addToCart}
              disabled={cart.length > 0}
              className={`bg-orange-400 text-white font-bold mt-5 w-full flex items-center justify-center gap-4 py-2 px-4 rounded-lg shadow lg:mt-0 lg:w-auto grow-[2] transition-all duration-200 ${
                cart.length ? "opacity-75" : "active:bg-orange-500"
              }`}
            >
              <AiOutlineShoppingCart />
              Add to cart
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
