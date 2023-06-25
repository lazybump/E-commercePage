import { useState } from "react";
import { products } from "./data";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import Header from "./components/Header";
import Lightbox from "./components/Lightbox";

interface Data {
  id: number;
  mainImage: string;
  thumbnail: string;
}

function App() {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  // const [slideIndex, setSlideIndex] = useState(1);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const { mainImage } = products[selectedImage];

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const isPreviousDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === products.length - 1;

  return (
    <>
      <Lightbox isLightboxOpen={isLightboxOpen} mainImage={mainImage} />
      <Header />
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:place-items-center lg:py-20 gap-20">
        <article>
          <div className="relative">
            <img
              src={mainImage}
              alt=""
              className="hidden lg:block lg:rounded-2xl duration-500 max-w-[500px]"
              onClick={() => setIsLightboxOpen(true)}
            />
            <div
              style={{
                backgroundImage: `url(${products[currentSlide].mainImage})`,
              }}
              className="min-h-[600px] bg-center bg-cover lg:rounded-2xl duration-500 lg:hidden"
            ></div>
            <ul className="lg:hidden">
              <li>
                <button
                  onClick={goToPreviousSlide}
                  disabled={isPreviousDisabled}
                  className={`bg-white rounded-full p-5 shadow absolute top-1/2 -translate-y-1/2 left-4 ${
                    isPreviousDisabled ? "opacity-60" : ""
                  }`}
                >
                  <FaChevronLeft />
                </button>
              </li>
              <li>
                <button
                  onClick={goToNextSlide}
                  disabled={isNextDisabled}
                  className={`bg-white rounded-full p-5 shadow absolute top-1/2 -translate-y-1/2 right-4 ${
                    isNextDisabled ? "opacity-60" : ""
                  }`}
                >
                  <FaChevronRight />
                </button>
              </li>
            </ul>
          </div>

          <ul className="hidden lg:flex items-center justify-between gap-5 mt-5">
            {products.map((product, index) => (
              <li
                key={product.id}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-2xl overflow-hidden cursor-pointer ${
                  index === selectedImage
                    ? "border-2 border-orange-400 opacity-80"
                    : ""
                }`}
              >
                <img
                  src={product.thumbnail}
                  alt=""
                  className="w-24 rounded-xl"
                />
              </li>
            ))}
          </ul>
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
              <li>
                <img src={minus} alt="" />
              </li>
              <li>{quantity}</li>
              <li>
                <img src={plus} alt="" />
              </li>
            </ul>
            <button className="bg-orange-400 text-white font-bold mt-5 w-full flex items-center justify-center gap-4 py-2 px-4 rounded-lg shadow lg:mt-0 lg:w-auto grow-[2] hover:bg-orange-500 transition-all duration-200">
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
