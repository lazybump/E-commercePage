interface LightboxProps {
  isLightboxOpen: boolean;
  mainImage: string;
}

const Lightbox = ({ isLightboxOpen, mainImage }: LightboxProps) => {
  return (
    <div
      className={`bg-black absolute inset-0 z-30 pointer-events-none transition-opacity duration-200 ${
        isLightboxOpen ? "opacity-60" : "opacity-0"
      }`}
    ></div>
  );
};

export default Lightbox;
