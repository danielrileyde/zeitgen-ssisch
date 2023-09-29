import { ArtPieceDetails } from "@/components/ArtPieceDetails";
import { ArtPiece } from "@/components/ArtPieces";
import { useFetchData } from "@/hooks/useFetchData";
import { useRouter } from "next/router";

export default function DetailsPage() {
  const { query } = useRouter();

  // TODO handle loading and error states
  const {
    data: pieces,
    loading,
    error,
  } = useFetchData("https://example-apis.vercel.app/api/art") as {
    data: ArtPiece[];
    loading: boolean;
    error: Error;
  };

  if (!pieces) return;

  const piece = pieces.find((piece) => piece.slug === query.slug);

  return (
    <ArtPieceDetails
      artist={piece.artist}
      genre={piece.genre}
      image={piece.imageSource}
      title={piece.name}
      year={piece.year}
    />
  );
}
