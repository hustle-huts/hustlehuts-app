import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { RecoilRoot } from "recoil";
import classNames from "classnames";

const font = Poppins({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <main className={classNames(font.className, "app")}>
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
