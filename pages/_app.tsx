import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { RecoilRoot } from "recoil";
const font = Poppins({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
