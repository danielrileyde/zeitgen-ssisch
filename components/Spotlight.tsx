interface SpotlightProps {
  image: string;
  artist: string;
  title: string;
}

export const Spotlight = ({ image, artist, title }: SpotlightProps) => {
  return (
    <>
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
