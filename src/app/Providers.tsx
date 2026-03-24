import { Analytics } from "@vercel/analytics/next";
import { PropsWithChildren, ReactNode } from "react";

export default function Providers(props: PropsWithChildren) {
  return (
    <>
      {props.children}
      <Analytics />
    </>
  );
}
