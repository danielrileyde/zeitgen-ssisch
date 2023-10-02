import Link from "next/link";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { ArtPiece } from "@/components/ArtPieces";

export default function App({ Component, pageProps }) {
  const [favourites, setFavourites] = useLocalStorageState<string[]>(
    "favourites",
    {
      defaultValue: [],
    }
  );
  const handleOnFavourite = (piece: ArtPiece) => {
    const isFavourite = favourites.includes(piece.slug);
    isFavourite
      ? setFavourites(favourites.filter((slug) => slug != piece.slug))
      : setFavourites([...favourites, piece.slug]);
  };
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
      <Component
        {...pageProps}
        favourites={favourites}
        onFavourite={handleOnFavourite}
      />
    </>
  );
}
