import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import menu from "../images/icon-menu.svg";
import Cart from "./Cart";
import { useState } from "react";
import { CartItem } from "../App";

interface HeaderProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cart: CartItem[];
  quantity: number;
  removeFromCart: (param: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header = ({
  setIsMenuOpen,
  cart,
  quantity,
  removeFromCart,
}: HeaderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <header className="flex items-center justify-between p-5 lg:p-8 border-b border-slate-400 max-w-7xl mx-auto relative">
      <div className="flex items-center justify-start gap-8">
        <ul className="flex items-center gap-4">
          <li className="lg:hidden flex">
            <button onClick={() => setIsMenuOpen(true)}>
              <img src={menu} alt="Menu icon" />
            </button>
          </li>
          <li>
            <img src={logo} alt="Brand logo" className="w-28 lg:w-auto" />
          </li>
        </ul>
        <nav className="hidden lg:block">
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
        <ul className="flex items-center justify-start gap-4 lg:gap-8">
          <li className="flex">
            <button
              onClick={() => setIsCartOpen((prev) => !prev)}
              className="text-2xl text-slate-600 transition-transform duration-200 active:scale-110 ease-in-out hover:text-black"
            >
              <AiOutlineShoppingCart />
            </button>
          </li>
          <li>
            <img
              src={avatar}
              alt="Avatar"
              className="w-8 lg:w-12 rounded-full cursor-pointer border-2 border-transparent hover:border-orange-400 ease-out transition-all duration-100"
            />
          </li>
          {isCartOpen && (
            <Cart
              cart={cart}
              quantity={quantity}
              removeFromCart={removeFromCart}
            />
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
