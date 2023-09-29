import Image from "next/image";
import Link from "next/link";

interface ArtPiecePreviewProps {
  image: string;
  title: string;
  artist: string;
  slug: string;
}

export const ArtPiecePreview = ({
  image,
  title,
  artist,
  slug,
}: ArtPiecePreviewProps) => {
  return (
    <Link href={`art-pieces/${slug}`}>
      <img
        src={image}
        alt={`Art piece called ${title}, by Artist ${artist}`}
        width={200}
        height={200}
      />
      <button>❤️</button>
      <footer>
        <h5>
          {artist}: {title}
        </h5>
      </footer>
    </Link>
  );
};
