import Link from "next/link";
import { ArtPiece } from "./ArtPieces";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

interface ArtPieceDetailsProps {
  piece: ArtPiece;
  isFavourite: boolean;
  onFavourite: (slug: ArtPiece["slug"]) => void;
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
        <button
          className={`art-piece-details__favourite-button ${
            isFavourite ? "m-is-favourite" : ""
          }`}
          onClick={() => onFavourite(piece.slug)}
        >
          ❤️
        </button>
      </header>
      <h2>{piece.name}</h2>
      {/*TODO - crate function togenerate alt comment */}
      <img
        width={200}
        height={200}
        src={piece.imageSource}
        alt={"placeholder"}
      />
      {/* <ul>
        {piece.colors.map((color) => {
          return (
            <span key={piece.slug} style={{ backgroundColor: color }}></span>
          );
        })}
      </ul> */}
      <span>
        {piece.artist} {piece.year} {piece.genre}
      </span>
    </>
  );
};
