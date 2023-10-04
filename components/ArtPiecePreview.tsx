import { FavouriteButton } from "./FavouriteButton";
import styles from "@/styles/ArtPiecePreview.module.css";
import { ArtPiece } from "./ArtPieces";
import { CSSProperties } from "react";

interface ArtPiecePreviewProps {
  piece: ArtPiece;
  isFavourite: boolean;
  onFavourite: () => void;
  showDetails?: boolean;
  imageStyles?: CSSProperties;
}

export const ArtPiecePreview = ({
  piece,
  showDetails,
  isFavourite,
  onFavourite,
  imageStyles,
}: ArtPiecePreviewProps) => {
  return (
    <div className={styles.container}>
      <FavouriteButton isFavourite={isFavourite} onFavourite={onFavourite} />
      <img
        src={piece.imageSource}
        className={styles.image}
        alt={`Art piece called ${piece.name}, by Artist ${piece.artist}`}
        style={imageStyles}
      />
      <footer className={styles.footer}>
        <h4>{piece.name}</h4>
        <p>{piece.artist}</p>
        {showDetails && (
          <div className={styles.details}>
            <b>Year</b>
            <p>{piece.year}</p>
            <b>Dimensions</b>
            <p>
              {piece.dimensions.width} x {piece.dimensions.height}
            </p>
            <b>Genre</b>
            <p>{piece.genre}</p>
            <div className={styles.color__container}>
              <b>Color palette</b>
              <ul className={styles.list}>
                {piece.colors.map((color) => {
                  return (
                    // TODO - use styled component
                    <li
                      key={color}
                      className={styles.color}
                      style={{ backgroundColor: color }}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
};
