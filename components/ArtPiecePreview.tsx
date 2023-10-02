import Image from "next/image";
import Link from "next/link";
import { FavouriteButton } from "./FavouriteButton";

interface ArtPiecePreviewProps {
  image: string;
  title: string;
  artist: string;
  slug: string;
  isFavourite: boolean;
  onFavourite: () => void;
}

export const ArtPiecePreview = ({
  image,
  title,
  artist,
  slug,
  isFavourite,
  onFavourite,
}: ArtPiecePreviewProps) => {
  return (
    <>
      <FavouriteButton isFavourite={isFavourite} onFavourite={onFavourite} />
      <Link href={`art-pieces/${slug}`}>
        <img
          src={image}
          alt={`Art piece called ${title}, by Artist ${artist}`}
          width={200}
          height={200}
        />
      </Link>
      <footer>
        <h5>
          {artist}: {title}
        </h5>
      </footer>
    </>
  );
};
