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
}

export const ArtPieces = ({ pieces }: ArtPiecesProps) => {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              artist={piece.artist}
              image={piece.imageSource}
              title={piece.name}
              slug={piece.slug}
            />
          </li>
        );
      })}
    </ul>
  );
};
