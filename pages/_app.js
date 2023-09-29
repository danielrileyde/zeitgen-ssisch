import Link from "next/link";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Zeitgenössisch</h1>
        <nav>
          <Link href="/spotlight">Spotlight</Link>
          <Link href="/">Art Pieces</Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}
