import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";

import { providers } from "ethers";

import { useCallback, useEffect, useRef, useState } from "react";

export function useWalletConnect() {
  const web3Modal = useRef<Web3Modal>();

  const [account, setAccount] = useState("");

  const getProvider = useCallback(async (): Promise<providers.Web3Provider> => {
    const provider = await web3Modal.current?.connect();
    console.log("connected");

    provider.on("chainChanged", (chainId: string) => {
      console.log("chainChanged: ", chainId);
    });

    provider.on("accountsChanged", (accounts: string[]) => {
      const [account] = accounts;

      if (account == null) {
        console.log("account disconnected");
      } else {
        console.log("account changed: ", account);
      }

      localStorage.setItem("account", account ?? "");
      setAccount(account);
    });

    const web3Provider = new providers.Web3Provider(provider);

    return web3Provider;
  }, [web3Modal]);

  const connectWallet = useCallback(async () => {
    const provider = await getProvider();
    if (provider == null) throw new Error("provider not found");
    const accounts = (await provider.send(
      "eth_requestAccounts",
      []
    )) as string[];

    setAccount(accounts[0]);

    localStorage.setItem("account", accounts[0]);
  }, [getProvider]);

  useEffect(() => {
    const rpc = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL;
    if (rpc == null) throw new Error("Missing rpc url on Alchemy");

    web3Modal.current = new Web3Modal({
      network: "goerli",
      providerOptions: {
        walletconnect: {
          package: WalletConnect,
          options: {
            rpc: {
              5: rpc,
            },
          },
        },
      },
    });
  }, []);

  // TODO: support caching provider
  useEffect(() => {
    const account = localStorage.getItem("account") ?? "";

    setAccount(account);
  }, []);

  return {
    account,
    setAccount,
    connectWallet,
  };
}
