type Comment = {
  id: string;
  text: string;
};

export type CommentObjType = {
  piece_id: string;
  comments: Comment[];
};

interface CommentsProps {
  comments: CommentObjType;
}

export const Comments = ({ comments: commentsObject }: CommentsProps) => {
  return (
    <ul>
      {commentsObject.comments.map((comment) => {
        return <p key={comment.id}>{comment.text}</p>;
      })}
    </ul>
  );
};
