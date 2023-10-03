import { ArtPiecePreview } from "./ArtPiecePreview";
import { ArtPiece } from "./ArtPieces";

interface SpotlightProps {
  piece: ArtPiece;
  isFavourite: boolean;
  onFavourite: (piece: ArtPiece) => void;
}

export const Spotlight = ({
  piece,
  isFavourite,
  onFavourite,
}: SpotlightProps) => {
  return (
    <ArtPiecePreview
      piece={piece}
      isFavourite={isFavourite}
      onFavourite={() => onFavourite(piece)}
    />
  );
};
