import { ArtPiece } from "@/components/ArtPieces";
import { Spotlight } from "@/components/Spotlight";
import { useFetchData } from "@/hooks/useFetchData";
import { getRandomElement } from "@/utilities/general";

interface SpotlightPageProps {
  favourites: string[];
  onFavourite: (piece: ArtPiece) => void;
}

export default function SpotlightPage({
  favourites,
  onFavourite,
}: SpotlightPageProps) {
  // TODO - Figure out how to not have to repeat types of loading and error in typecast
  // TODO - Handle loading and error states.
  // TODO - dont re-render page when favourites chnages.
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

  const randomPiece = getRandomElement(pieces as []) as ArtPiece;
  const isFavourite = favourites.includes(randomPiece.slug);

  return (
    <Spotlight
      image={randomPiece.imageSource}
      artist={randomPiece.artist}
      title={randomPiece.name}
      isFavourite={isFavourite}
      onFavourite={() => onFavourite(randomPiece)}
    />
  );
}
