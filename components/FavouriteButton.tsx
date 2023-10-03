import { HeartIcon } from "@/assets/HeartIcon";

interface FavouriteButtonProps {
  isFavourite: boolean;
  onFavourite: () => void;
}

export const FavouriteButton = ({
  isFavourite,
  onFavourite,
}: FavouriteButtonProps) => {
  const fill = isFavourite ? "red" : "white";
  return (
    <button
      className="art-piece-details__favourite-button"
      onClick={onFavourite}
    >
      <HeartIcon style={{ width: "24px", height: "24px", fill: fill }} />
    </button>
  );
};
