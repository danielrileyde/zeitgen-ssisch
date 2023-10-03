import Link from "next/link";
import { FavouriteButton } from "./FavouriteButton";
import styles from "@/styles/ArtPiecePreview.module.css";
import { ArtPiece } from "./ArtPieces";

interface ArtPiecePreviewProps {
  piece: ArtPiece;
  isFavourite: boolean;
  onFavourite: () => void;
}

export const ArtPiecePreview = ({
  piece,
  isFavourite,
  onFavourite,
}: ArtPiecePreviewProps) => {
  return (
    <div className={styles.container}>
      <FavouriteButton isFavourite={isFavourite} onFavourite={onFavourite} />
      <Link href={`art-pieces/${piece.slug}`}>
        <img
          src={piece.imageSource}
          className={styles.image}
          alt={`Art piece called ${piece.name}, by Artist ${piece.artist}`}
          style={{
            maxWidth: piece.dimensions.width,
            maxHeight: piece.dimensions.height,
          }}
        />
      </Link>
      <footer className={styles.footer}>
        <h5>
          {piece.artist}: {piece.name}
        </h5>
      </footer>
    </div>
  );
};
