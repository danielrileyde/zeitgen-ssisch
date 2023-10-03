import { ArtPieceDetails } from "@/components/ArtPieceDetails";
import { ArtPiece } from "@/components/ArtPieces";
import { CommentForm } from "@/components/CommentForm";
import { CommentObjType, Comments } from "@/components/Comments";
import { useFetchData } from "@/hooks/useFetchData";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function DetailsPage({ favourites, onFavourite }) {
  const { query } = useRouter();

  const [comments, setComments] = useLocalStorageState<CommentObjType[]>(
    "comments",
    {
      defaultValue: [],
    }
  );

  const commentsForPiece = comments.find((obj) => obj.piece_id === query.slug);

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

    if (commentsForPiece) {
      commentsForPiece.comments = [
        ...commentsForPiece.comments,
        { id: uid(), text: comment },
      ];
      const index = comments.findIndex(
        (comment) => comment.piece_id === piece.slug
      );
      comments[index] = commentsForPiece;
      setComments(comments);
    } else {
      setComments([
        ...comments,
        { piece_id: piece.slug, comments: [{ id: uid(), text: comment }] },
      ]);
    }
    event.currentTarget.reset();
  };

  return (
    <>
      <ArtPieceDetails
        piece={piece}
        isFavourite={isFavourite}
        onFavourite={onFavourite}
      />
      <CommentForm onSubmit={handleSubmit} />
      {commentsForPiece && <Comments comments={commentsForPiece} />}
    </>
  );
}
