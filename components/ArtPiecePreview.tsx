import Image from "next/image";

interface ArtPiecePreviewProps {
  image: string;
  title: string;
  artist: string;
}

export const ArtPiecePreview = ({
  image,
  title,
  artist,
}: ArtPiecePreviewProps) => {
  return (
    <div>
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
    </div>
  );
};
