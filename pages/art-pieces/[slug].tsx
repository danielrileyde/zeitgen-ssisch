import { CommentObjType, Comments } from "@/components/Comments";
import { ArtPieceDetails } from "@/components/ArtPieceDetails";
import useLocalStorageState from "use-local-storage-state";
import { CommentForm } from "@/components/CommentForm";
import styles from "@/styles/DetailsPage.module.css";
import { useRouter } from "next/router";
import { PageProps } from "../_app";
import { FormEvent } from "react";
import { uid } from "uid";

export default function DetailsPage({
  pieces,
  favourites,
  onFavourite,
}: PageProps) {
  const { query } = useRouter();

  const [comments, setComments] = useLocalStorageState<CommentObjType[]>(
    "comments",
    {
      defaultValue: [],
    }
  );

  const commentsForPiece = comments.find((obj) => obj.piece_id === query.slug);

  // TODO handle loading and error states

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
        { id: uid(), text: comment, date: new Date() },
      ];
      const index = comments.findIndex(
        (comment) => comment.piece_id === piece.slug
      );
      comments[index] = commentsForPiece;
      setComments(comments);
    } else {
      setComments([
        ...comments,
        {
          piece_id: piece.slug,
          comments: [{ id: uid(), text: comment, date: new Date() }],
        },
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
      <div className={styles.comments}>
        <CommentForm onSubmit={handleSubmit} />
        {commentsForPiece && <Comments comments={commentsForPiece} />}
      </div>
    </>
  );
}
