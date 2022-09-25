
import { Avatar } from '../avatar';
import { Comment } from '../comment';
import { format, formatDistanceToNow } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import styles from './Post.module.css';
import { useLogic } from './useLogic';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  description: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: string;
}

export function Post({ author, publishedAt, content }: PostProps) {
  
  const {deleteComment,
    handleCrateNewComment,
    handleNewCommentChange,
    handleNewCommentInvalid,
    isNewCommentEmpty,newCommentText, comments,} = useLogic()
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: enUS,
    });
  
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: enUS,
      addSuffix: true
    });


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>{content}</div>

      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <strong>Share your toughts</strong>

        <textarea
          name="comment"
          placeholder="Comment..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}