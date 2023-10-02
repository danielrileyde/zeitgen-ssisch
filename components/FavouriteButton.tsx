interface FavouriteButtonProps {
  isFavourite: boolean;
  onFavourite: () => void;
}

export const FavouriteButton = ({
  isFavourite,
  onFavourite,
}: FavouriteButtonProps) => {
  return (
    <button
      className={`art-piece-details__favourite-button ${
        isFavourite ? "m-is-favourite" : ""
      }`}
      onClick={onFavourite}
    >
      ❤️
    </button>
  );
};
