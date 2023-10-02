import { ArtPieceDetails } from "@/components/ArtPieceDetails";
import { ArtPiece } from "@/components/ArtPieces";
import { useFetchData } from "@/hooks/useFetchData";
import { useRouter } from "next/router";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function DetailsPage() {
  const { query } = useRouter();
  const [favourites, setFavourites] = useLocalStorageState<string[]>(
    "favourites",
    {
      defaultValue: [],
    }
  );

  // TODO handle loading and error states
  const {
    data: pieces,
    loading,
    error,
  } = useFetchData("https://example-apis.vercel.app/api/art") as {
    data: ArtPiece[];
    loading: boolean;
    error: Error;
  };

  if (!pieces) return;

  const piece = pieces.find((piece) => piece.slug === query.slug);
  const isFavourite = favourites.includes(piece.slug);

  const handleFavourite = (slug: string) => {
    isFavourite
      ? setFavourites(favourites.filter((id) => id != slug))
      : setFavourites([...favourites, slug]);
  };
  return (
    <ArtPieceDetails
      piece={piece}
      isFavourite={isFavourite}
      onFavourite={handleFavourite}
    />
  );
}
