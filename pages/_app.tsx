import useLocalStorageState from "use-local-storage-state";
import { useFetchData } from "@/hooks/useFetchData";
import { ArtPiece } from "@/components/ArtPieces";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";

export interface PageProps {
  pieces: ArtPiece[];
  favourites: string[];
  onFavourite: (piece: ArtPiece, isFavourite: boolean) => void;
}

export default function App({
  Component,
  pageProps,
}: {
  Component: FunctionComponent<PageProps>;
  pageProps: PageProps;
}) {
  const { pathname } = useRouter();

  const {
    data: pieces,
    loading,
    error,
  } = useFetchData("https://example-apis.vercel.app/api/art") as {
    data: ArtPiece[];
    loading: boolean;
    error: Error;
  };

  const [favourites, setFavourites] = useLocalStorageState<string[]>(
    "favourites",
    {
      defaultValue: [],
    }
  );

  const handleOnFavourite = (piece: ArtPiece, isFavourite: boolean) => {
    isFavourite
      ? setFavourites(favourites.filter((slug) => slug != piece.slug))
      : setFavourites([...favourites, piece.slug]);
  };

  if (!pieces) return;
  if (error) return <div>{error.message}</div>;
  if (loading) return <div>Loading</div>;

  return (
    <>
      <Header currentPage={pathname} />
      <Layout>
        <Component
          {...pageProps}
          pieces={pieces}
          favourites={favourites}
          onFavourite={handleOnFavourite}
        />
      </Layout>
    </>
  );
}
