import Link from "next/link";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { ArtPiece } from "@/components/ArtPieces";
import { Header } from "@/components/Header";

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
      <Header />
      <Component
        {...pageProps}
        favourites={favourites}
        onFavourite={handleOnFavourite}
      />
    </>
  );
}
