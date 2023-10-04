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
    <button
      className={styles.button}
      onClick={(e) => {
        e.preventDefault();
        onFavourite();
      }}
    >
      <HeartIcon
        style={{
          width: "30px",
          height: "30px",
          fill: fill,
        }}
      />
    </button>
  );
};
