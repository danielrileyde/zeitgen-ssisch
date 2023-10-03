import { HeartIcon } from "@/assets/HeartIcon";
import styles from "@/styles/FavouriteButton.module.css";

interface FavouriteButtonProps {
  isFavourite: boolean;
  onFavourite: () => void;
}

export const FavouriteButton = ({
  isFavourite,
  onFavourite,
}: FavouriteButtonProps) => {
  const fill = isFavourite ? "#ff0000" : "#999";
  return (
    <button className={styles.button} onClick={onFavourite}>
      <HeartIcon style={{ width: "24px", height: "24px", fill: fill }} />
    </button>
  );
};
