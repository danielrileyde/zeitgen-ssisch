import { ArtPieces } from "@/components/ArtPieces";
import { useFetchData } from "@/hooks/useFetchData";

export default function HomePage() {
  // TODO - handle loading and error states
  const {
    data: pieces,
    loading,
    error,
  } = useFetchData("https://example-apis.vercel.app/api/art");

  if (!pieces) return;

  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
