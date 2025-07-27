import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from '@/components/layout/Header'; // Adjust the path if needed

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Component {...pageProps} />
      </main>
    </>
  </>;
}
