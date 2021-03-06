import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";

import { providers } from "ethers";

import { useCallback, useEffect, useRef, useState } from "react";

export function useWalletConnect() {
  const web3Modal = useRef<Web3Modal>();

  const [account, setAccount] = useState("");

  const setListener = (provider: any) => {
    provider.on("chainChanged", (chainId: string) => {
      console.log("chainChanged: ", chainId);
    });

    provider.on("accountsChanged", (accounts: string[]) => {
      const [account] = accounts;

      if (account == null) {
        console.log("account disconnected");
        web3Modal.current?.clearCachedProvider();
      } else {
        console.log("account changed: ", account);
      }
      setAccount(account);
    });
  };

  const getProvider =
    useCallback(async (): Promise<providers.Web3Provider | null> => {
      try {
        const cachedProviderId = web3Modal.current?.cachedProvider;

        let provider;
        if (cachedProviderId) {
          provider = await web3Modal.current?.connectTo(cachedProviderId);
        } else {
          provider = await web3Modal.current?.connect();
        }
        console.log("connected");

        setListener(provider);

        const web3Provider = new providers.Web3Provider(provider);

        return web3Provider;
      } catch (err) {
        console.error(err);
        return null;
      }
    }, [web3Modal]);

  const connectWallet = useCallback(async () => {
    const provider = await getProvider();
    if (provider == null) {
      console.error("provider not found");
      return;
    }
    const accounts = (await provider.send(
      "eth_requestAccounts",
      []
    )) as string[];

    setAccount(accounts[0]);

    localStorage.setItem("account", accounts[0]);
  }, [getProvider]);

  useEffect(() => {
    async function load() {
      const rpc = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL;
      if (rpc == null) throw new Error("Missing rpc url on Alchemy");

      web3Modal.current = new Web3Modal({
        network: "goerli",
        cacheProvider: true,
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

      const cachedProviderId = web3Modal.current?.cachedProvider;

      if (cachedProviderId) {
        const proxy = await web3Modal.current?.connectTo(cachedProviderId);
        setListener(proxy);
        const provider = new providers.Web3Provider(proxy);

        const [account] = await provider.listAccounts();

        if (account) setAccount(account);
      }
    }
    load();
  }, []);

  return {
    account,
    setAccount,
    connectWallet,
  };
}
