import { useFetchData } from "@/hooks/useFetchData";

export default function HomePage() {
  const { data, loading, error } = useFetchData(
    "https://example-apis.vercel.app/api/art"
  );
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
