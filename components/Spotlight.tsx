import { FavouriteButton } from "./FavouriteButton";

interface SpotlightProps {
  image: string;
  artist: string;
  title: string;
  isFavourite: boolean;
  onFavourite: () => void;
}

export const Spotlight = ({
  image,
  artist,
  title,
  isFavourite,
  onFavourite,
}: SpotlightProps) => {
  return (
    <>
      <FavouriteButton isFavourite={isFavourite} onFavourite={onFavourite} />
      <h2>{artist}</h2>
      <img
        src={image}
        width={250}
        height={250}
        alt={`Art piece called ${title}, by Artist ${artist}`}
      />
    </>
  );
};
