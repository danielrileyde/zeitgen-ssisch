import { FormEvent } from "react";

interface CommentFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const CommentForm = ({ onSubmit }: CommentFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="textarea">Add comment:</label>
      <input
        id="textarea"
        name="comment"
        required
        placeholder="Leave your comment here..."
      />
      <button>Send</button>
    </form>
  );
};
