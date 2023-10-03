import { FormEvent } from "react";
import styles from "@/styles/CommentForm.module.css";

interface CommentFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const CommentForm = ({ onSubmit }: CommentFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="textarea">
        <h4>Add comment</h4>
      </label>
      <input
        id="textarea"
        className={styles.input}
        name="comment"
        required
        placeholder="Leave your comment here..."
      />
      <button className={styles.button}>Send</button>
    </form>
  );
};
