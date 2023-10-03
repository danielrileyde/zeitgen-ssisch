import Link from "next/link";
import styles from "@/styles/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Zeitgenössisch</h1>
      <nav>
        <Link href="/spotlight">Spotlight</Link>
        <Link href="/">Art Pieces</Link>
        <Link href="/favourites">Favourites</Link>
      </nav>
    </header>
  );
};
