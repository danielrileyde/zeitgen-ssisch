import styles from "@/styles/Comments.module.css";

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
    <div className={styles.container}>
      <h4>Comments</h4>
      <ol className={styles.list__container}>
        {commentsObject.comments.map((comment, index) => {
          return (
            <li key={comment.id}>
              <p>
                {index}. {comment.text}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
