const Lightbox = () => {
  return (
    <div
      className={`hidden lg:block bg-black absolute inset-0 z-30 pointer-events-none transition-opacity duration-200 opacity-80`}
    ></div>
  );
};

export default Lightbox;
