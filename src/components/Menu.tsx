import closeButton from "../images/icon-close.svg";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ isMenuOpen, setIsMenuOpen }: MenuProps) => {
  const pages = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <aside
      className={`bg-white shadow-2xl text-custom-black fixed inset-y-0 w-3/5 p-8 space-y-8 z-50 transition-all duration-500 ${
        isMenuOpen ? "" : "-translate-x-full"
      }`}
    >
      <button onClick={() => setIsMenuOpen(false)} className="mt-3">
        <img src={closeButton} alt="Close menu button" />
      </button>
      <ul className="space-y-3">
        {pages.map((page) => (
          <li className="font-bold">{page}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
