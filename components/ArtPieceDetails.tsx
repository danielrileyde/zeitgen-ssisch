import Link from "next/link";
import { ArtPiece } from "./ArtPieces";
import { FavouriteButton } from "./FavouriteButton";

interface ArtPieceDetailsProps {
  piece: ArtPiece;
  isFavourite: boolean;
  onFavourite: (piece: ArtPiece) => void;
}

export const ArtPieceDetails = ({
  piece,
  isFavourite,
  onFavourite,
}: ArtPieceDetailsProps) => {
  return (
    <>
      <header>
        <Link href="/">←</Link>
        <FavouriteButton
          isFavourite={isFavourite}
          onFavourite={() => onFavourite(piece)}
        />
      </header>
      <h2>{piece.name}</h2>
      {/*TODO - crate function togenerate alt comment */}
      <img
        width={200}
        height={200}
        src={piece.imageSource}
        alt={"placeholder"}
      />
      <ul>
        {piece.colors.map((color) => {
          console.log("colours: ", color);
          return (
            <span
              key={color}
              // TODO - use styled component
              style={{
                backgroundColor: color,
                width: "32px",
                height: "32px",
                display: "inline-block",
              }}
            />
          );
        })}
      </ul>
      <span>
        {piece.artist} {piece.year} {piece.genre}
      </span>
    </>
  );
};
