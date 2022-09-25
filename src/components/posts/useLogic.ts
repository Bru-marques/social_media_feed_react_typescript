
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface PostProps {
  publishedAt: Date;
}

export function useLogic(){
  
  const [comments, setComments] = useState([
    'Very nice! = D'
  ]);

  const [newCommentText, setNewCommentText] = useState('');



  function handleCrateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;


  return{
    deleteComment,
    handleCrateNewComment,
    handleNewCommentChange,
    handleNewCommentInvalid,
    comments,
    isNewCommentEmpty,
    newCommentText,
  }
}