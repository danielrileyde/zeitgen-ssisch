import { ArtPiece } from "@/components/ArtPieces";
import { Spotlight } from "@/components/Spotlight";
import { useFetchData } from "@/hooks/useFetchData";
import { getRandomElement } from "@/utilities/general";

export default function SpotlightPage() {
  // TODO - Figure out how to not have to repeat types of loading and error in typecast
  // TODO - Handle loading and error states.
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

  return (
    <div>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        title={randomPiece.name}
      />
    </div>
  );
}
