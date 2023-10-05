import { ArtPiece, ArtPieces } from "@/components/ArtPieces";

export const Favourites = ({ pieces, favourites, onFavourite }) => {
  const favouritePieces = pieces.filter((piece: ArtPiece) =>
    favourites.includes(piece.slug)
  );

  if (!favouritePieces.length)
    return <p>Sorry, you dont have any favourites to display.</p>;

  return (
    <ArtPieces
      pieces={favouritePieces}
      favourites={favourites}
      onFavourite={onFavourite}
    />
  );
};
export default Favourites;
