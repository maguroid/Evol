import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";
const Header = () => {
  const menus = [
    {
      path: "/mint",
      name: "Mint",
    },
    {
      path: "/stake",
      name: "Stake",
    },
    {
      path: "/profile",
      name: "Profile",
    },
  ];
  return (
    <header className="flex justify-between bg-cyan-500 p-5">
      <Link href="/">
        <a>
          <Image src={logo} alt="logo" />
        </a>
      </Link>
      <div className="flex gap-7 text-white font-bold items-center">
        {menus.map((menu, i) => (
          <Link href={menu.path} key={i}>
            <a>{menu.name}</a>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
