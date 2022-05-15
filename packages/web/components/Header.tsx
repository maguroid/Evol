import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";

import { useWalletConnect } from "@/hooks/useWalletConnect";

export default function Header() {
  const { account, connectWallet } = useWalletConnect();
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
      <div className="flex gap-10">
        <div className="flex gap-7 text-white font-bold items-center">
          {menus.map((menu, i) => (
            <Link href={menu.path} key={i}>
              <a>{menu.name}</a>
            </Link>
          ))}
        </div>
        {account ? (
          <div className="text-sm text-white font-bold flex items-center">
            {account.slice(0, 10)}...
          </div>
        ) : (
          <button className="button primary" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
