import { getRandomElement } from "@/utilities/general";
import { Spotlight } from "@/components/Spotlight";
import { ArtPiece } from "@/components/ArtPieces";

interface SpotlightPageProps {
  pieces: ArtPiece[];
  favourites: string[];
  onFavourite: (piece: ArtPiece) => void;
}

export default function SpotlightPage({
  pieces,
  favourites,
  onFavourite,
}: SpotlightPageProps) {
  // TODO - Don't re-render page when favourites changes.

  const randomPiece = getRandomElement(pieces as []) as ArtPiece;
  const isFavourite = favourites.includes(randomPiece.slug);

  return (
    <Spotlight
      piece={randomPiece}
      isFavourite={isFavourite}
      onFavourite={() => onFavourite(randomPiece)}
    />
  );
}
