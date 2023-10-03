import { ArtPieceDetails } from "@/components/ArtPieceDetails";
import { ArtPiece } from "@/components/ArtPieces";
import { CommentForm } from "@/components/CommentForm";
import { useFetchData } from "@/hooks/useFetchData";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import useLocalStorageState from "use-local-storage-state";

type Comment = {
  id: string;
  comments: string[];
};

export default function DetailsPage({ favourites, onFavourite }) {
  const { query } = useRouter();

  const [comments, setComments] = useLocalStorageState<Comment[]>("comments", {
    defaultValue: [],
  });

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
  const isFavourite = favourites.includes(piece.slug);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const comment = data.comment as string;
    const pieceInComments = comments?.find(
      (comment) => comment.id === piece.slug
    );

    if (pieceInComments) {
      pieceInComments.comments = [...pieceInComments.comments, comment];
      const index = comments.findIndex((comment) => comment.id === piece.slug);
      comments[index] = pieceInComments;
      setComments(comments);
    } else {
      setComments([...comments, { id: piece.slug, comments: [comment] }]);
    }
  };

  return (
    <>
      <ArtPieceDetails
        piece={piece}
        isFavourite={isFavourite}
        onFavourite={onFavourite}
      />
      <CommentForm onSubmit={handleSubmit} />
    </>
  );
}
