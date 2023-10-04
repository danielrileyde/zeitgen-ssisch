import Link from "next/link";
import styles from "@/styles/Header.module.css";

interface HeaderProps {
  currentPage: string;
}

export const Header = ({ currentPage }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.ghost}></div>
      <h1 className={styles.title}>zeit_genossen</h1>
      <nav className={styles.nav}>
        <Link
          className={currentPage === "/spotlight" ? styles.active : ""}
          href="/spotlight"
        >
          Spotlight
        </Link>
        <Link className={currentPage === "/" ? styles.active : ""} href="/">
          Art Pieces
        </Link>
        <Link
          className={currentPage === "/favourites" ? styles.active : ""}
          href="/favourites"
        >
          Favourites
        </Link>
      </nav>
    </header>
  );
};
