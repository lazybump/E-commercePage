import bin from "../images/icon-delete.svg";
import { CartItem } from "../App";
import { useEffect, useRef } from "react";

interface CartProps {
  cart: CartItem[];
  quantity: number;
  removeFromCart: (param: React.MouseEvent<HTMLButtonElement>) => void;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartButtonRef: React.RefObject<HTMLButtonElement>;
}

const Cart = ({
  cart,
  quantity,
  removeFromCart,
  setIsCartOpen,
  cartButtonRef,
}: CartProps) => {
  const cartRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        !cartRef.current?.contains(event.target as Node) &&
        !cartButtonRef.current?.contains(event.target as Node)
      ) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <li
      className="bg-white rounded-2xl shadow-lg absolute top-20 inset-x-4 z-10 lg:left-auto lg:w-96"
      ref={cartRef}
    >
      <section className="border-b border-slate-200 p-6">
        <h2 className="font-bold">Cart</h2>
      </section>

      <section className="p-4 lg:p-7 h-48 lg:h-56 flex flex-col justify-center">
        {cart.length ? (
          <>
            {cart.map((item, index) => (
              <article
                key={index}
                className="flex items-center justify-between"
              >
                <img
                  src={item.thumbnail}
                  alt="Product thumbnail"
                  className="rounded-lg w-10 lg:w-14"
                />
                <ul className="text-slate-600 text-xs lg:text-base">
                  <li>{item.name}</li>
                  <li>
                    ${item.price.toFixed(2)} x {quantity}
                    <span className="font-bold text-slate-900 ml-2">{`$${(
                      item.price * quantity
                    ).toFixed(2)}`}</span>
                  </li>
                </ul>
                <button
                  name="bin-btn"
                  onClick={removeFromCart}
                  className="active:scale-125 duration-300"
                >
                  <img
                    src={bin}
                    alt="Bin icon"
                    className="pointer-events-none"
                  />
                </button>
              </article>
            ))}

            <button className="bg-orange-400 text-white font-bold mt-5 w-full py-2 px-4 rounded-lg shadow hover:bg-orange-500 transition-all duration-200">
              Checkout
            </button>
          </>
        ) : (
          <p className="text-slate-500 text-center font-bold">
            Your cart is empty.
          </p>
        )}
      </section>
    </li>
  );
};

export default Cart;
