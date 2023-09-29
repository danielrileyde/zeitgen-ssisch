import Link from "next/link";

export const ArtPieceDetails = ({ image, title, artist, year, genre }) => {
  return (
    <>
      <header>
        <Link href="/">←</Link>
        <button>❤️</button>
      </header>
      <h2>{title}</h2>
      {/*TODO - crate function togenerate alt comment */}
      <img width={200} height={200} src={image} alt={"placeholder"} />
      {/* <ul>
        {piece.colors.map((color) => {
          return (
            <span key={piece.slug} style={{ backgroundColor: color }}></span>
          );
        })}
      </ul> */}
      <span>
        {artist} {year} {genre}
      </span>
    </>
  );
};
