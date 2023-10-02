import { ArtPiece, ArtPieces } from "@/components/ArtPieces";
import { useFetchData } from "@/hooks/useFetchData";

export const Favourites = ({ favourites, onFavourite }) => {
  const {
    data: pieces,
    loading,
    error,
  } = useFetchData("https://example-apis.vercel.app/api/art") as {
    data: ArtPiece[];
    loading: boolean;
    error: Error;
  };

  if (!pieces) return;
  const favouritePieces = pieces.filter((piece) =>
    favourites.includes(piece.slug)
  );

  return favouritePieces.length > 0 ? (
    <ul>
      <ArtPieces
        pieces={favouritePieces}
        favourites={favourites}
        onFavourite={onFavourite}
      />
    </ul>
  ) : (
    <p>Sorry, you dont have any favourites to display.</p>
  );
};
export default Favourites;
