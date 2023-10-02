import { ArtPiecePreview } from "./ArtPiecePreview";

export type ArtPiece = {
  slug: string;
  artist: string;
  name: string;
  imageSource: string;
  year: string;
  genre: string;
  colors: string[];
  dimensions: {
    height: number;
    width: number;
    type: string;
  };
};

interface ArtPiecesProps {
  pieces: ArtPiece[];
  favourites: string[];
  onFavourite: (piece: ArtPiece) => void;
}

export const ArtPieces = ({
  pieces,
  favourites,
  onFavourite,
}: ArtPiecesProps) => {
  return (
    <ul>
      {pieces.map((piece) => {
        const isFavourite = favourites.includes(piece.slug);
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              artist={piece.artist}
              image={piece.imageSource}
              title={piece.name}
              slug={piece.slug}
              isFavourite={isFavourite}
              onFavourite={() => onFavourite(piece)}
            />
          </li>
        );
      })}
    </ul>
  );
};
