import { ArtPiece } from "./ArtPieces";
import { ArtPiecePreview } from "./ArtPiecePreview";

interface ArtPieceDetailsProps {
  piece: ArtPiece;
  isFavourite: boolean;
  onFavourite: (piece: ArtPiece, isFavourite: boolean) => void;
}

export const ArtPieceDetails = ({
  piece,
  isFavourite,
  onFavourite,
}: ArtPieceDetailsProps) => {
  return (
    <ArtPiecePreview
      piece={piece}
      isFavourite={isFavourite}
      onFavourite={() => onFavourite(piece, isFavourite)}
      showDetails
      imageStyles={{ maxHeight: "50vh" }}
    />
  );
};
