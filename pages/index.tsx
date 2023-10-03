import { ArtPiece, ArtPieces } from "@/components/ArtPieces";
import { useFetchData } from "@/hooks/useFetchData";

interface HomePageProps {
  favourites: string[];
  onFavourite: (piece: ArtPiece) => void;
}

export default function HomePage({ favourites, onFavourite }: HomePageProps) {
  // TODO - handle loading and error states
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

  return (
    <ArtPieces
      pieces={pieces}
      favourites={favourites}
      onFavourite={onFavourite}
    />
  );
}
