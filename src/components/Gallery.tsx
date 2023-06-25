import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { data } from "../data";

interface Data {
  id: number;
  mainImage: string;
  thumbnail: string;
}

interface GalleryProps {
  isLightboxOpen?: boolean;
  setIsLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Gallery = ({ isLightboxOpen, setIsLightboxOpen }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const products: Data[] = data;
  const { mainImage } = products[selectedImage];

  const isPreviousDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === products.length - 1;

  return (
    <>
      <div className="relative">
        <img
          src={mainImage}
          alt=""
          className={`hidden lg:block cursor-pointer rounded-2xl duration-500 ${
            isLightboxOpen ? "max-w-[600px]" : "max-w-[500px]"
          }`}
          onClick={() => setIsLightboxOpen(true)}
        />
        <div
          style={{
            backgroundImage: `url(${products[currentSlide].mainImage})`,
          }}
          className="min-h-[300px] bg-center bg-cover lg:rounded-2xl duration-500 lg:hidden"
        ></div>
        <ul className="lg:hidden">
          <li>
            <button
              onClick={() => setCurrentSlide((prevSlide) => prevSlide - 1)}
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
              onClick={() => setCurrentSlide((prevSlide) => prevSlide + 1)}
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
            <img src={product.thumbnail} alt="" className="w-24 rounded-xl" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Gallery;
