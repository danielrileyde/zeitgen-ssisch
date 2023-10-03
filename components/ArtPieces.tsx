import Link from "next/link";
import { ArtPiecePreview } from "./ArtPiecePreview";
import styles from "@/styles/ArtPieces.module.css";

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
    <ul className={styles.container}>
      {pieces.map((piece) => {
        const isFavourite = favourites.includes(piece.slug);
        return (
          <li key={piece.slug}>
            <Link href={`art-pieces/${piece.slug}`}>
              <ArtPiecePreview
                piece={piece}
                isFavourite={isFavourite}
                onFavourite={() => onFavourite(piece)}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
