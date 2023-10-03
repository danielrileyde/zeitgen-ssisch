import useLocalStorageState from "use-local-storage-state";
import { ArtPiece } from "@/components/ArtPieces";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { useRouter } from "next/router";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

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
      <Header currentPage={pathname} />
      <Layout>
        <Component
          {...pageProps}
          favourites={favourites}
          onFavourite={handleOnFavourite}
        />
      </Layout>
    </>
  );
}
