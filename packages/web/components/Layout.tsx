import Header from "@/components/Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="p-20 w-full flex justify-center">{children}</main>;
    </>
  );
}
