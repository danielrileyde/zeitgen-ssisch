import { ArtPiece, ArtPieces } from "@/components/ArtPieces";

interface HomePageProps {
  pieces: ArtPiece[];
  favourites: string[];
  onFavourite: (piece: ArtPiece) => void;
}

export default function HomePage({
  pieces,
  favourites,
  onFavourite,
}: HomePageProps) {
  if (!pieces) return;

  return (
    <ArtPieces
      pieces={pieces}
      favourites={favourites}
      onFavourite={onFavourite}
    />
  );
}
