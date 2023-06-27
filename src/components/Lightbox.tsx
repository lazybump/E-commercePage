import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProductsType } from "../App";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

interface LightboxProps {
  isLightboxOpen: boolean;
  setIsLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products: ProductsType[];
}

const Lightbox = ({
  isLightboxOpen,
  setIsLightboxOpen,
  products,
}: LightboxProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const isPreviousDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === products.length - 1;

  const { mainImage } = products[currentSlide];

  return (
    <>
      {/* This div is the overlay */}
      <div
        className={`hidden lg:block bg-black absolute inset-0 z-30 pointer-events-none transition-opacity duration-200 opacity-80`}
      ></div>

      <div
        className={`absolute z-40 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${
          isLightboxOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end">
          <button
            className="mb-6 group"
            onClick={() => setIsLightboxOpen(false)}
          >
            <RiCloseFill className="text-3xl text-white stroke-1 group-hover:text-orange-500" />
          </button>
        </div>

        <>
          <div className="relative">
            <img
              src={mainImage}
              alt=""
              className="hidden lg:block cursor-pointer rounded-2xl max-w-[500px]"
              onClick={() => setIsLightboxOpen(true)}
            />
            <ul>
              <li>
                <button
                  onClick={() => setCurrentSlide((prevSlide) => prevSlide - 1)}
                  disabled={isPreviousDisabled}
                  className={`bg-white rounded-full p-5 shadow absolute top-1/2 -translate-y-1/2 left-4 ${
                    isPreviousDisabled ? "opacity-60" : "group"
                  }`}
                >
                  <FaChevronLeft className="group-hover:text-orange-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentSlide((prevSlide) => prevSlide + 1)}
                  disabled={isNextDisabled}
                  className={`bg-white rounded-full p-5 shadow absolute top-1/2 -translate-y-1/2 right-4 ${
                    isNextDisabled ? "opacity-60" : "group"
                  }`}
                >
                  <FaChevronRight className="group-hover:text-orange-500" />
                </button>
              </li>
            </ul>
          </div>

          <ul className="hidden lg:flex items-center justify-between gap-5 mt-5">
            {products.map((product, index) => (
              <li
                key={product.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                  index === currentSlide ? "border-2 border-orange-400" : ""
                }`}
              >
                <img
                  src={product.thumbnail}
                  alt=""
                  className="w-24 rounded-xl"
                />
                <div
                  className={`bg-white absolute inset-0 transition-opacity duration-100 ${
                    index === currentSlide
                      ? "opacity-60"
                      : "opacity-0 group-hover:opacity-30"
                  }`}
                ></div>
              </li>
            ))}
          </ul>
        </>
      </div>
    </>
  );
};

export default Lightbox;
