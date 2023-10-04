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
  const fill = isFavourite ? "#ff0000" : "#fff";
  const stroke = isFavourite ? "#ff7070" : "#fff";
  return (
    <button
      className={styles.button}
      onClick={(e) => {
        e.stopPropagation();
        onFavourite();
      }}
    >
      <HeartIcon
        style={{
          width: "30px",
          height: "30px",
          fill: fill,
          stroke: stroke,
        }}
      />
    </button>
  );
};
