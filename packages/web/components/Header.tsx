import Image from "next/image";
import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className="bg-cyan-500 p-5">
      <Image src={logo} alt="logo" />
    </header>
  );
};

export default Header;
