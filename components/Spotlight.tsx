import Link from "next/link";
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
    <Link href={`art-pieces/${piece.slug}`}>
      <ArtPiecePreview
        piece={piece}
        isFavourite={isFavourite}
        onFavourite={() => onFavourite(piece)}
        imageStyles={{ maxHeight: "50vh" }}
      />
    </Link>
  );
};
