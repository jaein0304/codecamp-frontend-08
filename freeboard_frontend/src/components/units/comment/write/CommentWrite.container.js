import { useState } from "react";
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardCommentUI from './CommentWrite.presenter'
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from './CommentWrite.queries'

export default function BoardCommentWrite(props){
  const router = useRouter()
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardUpdateComment] = useMutation(UPDATE_BOARD_COMMENT);

  //작성자
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if(event.target.value !== ""){
      setWriterError("")
    }

    if (event.target.value && password && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  //비밀번호
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("")
    }

    if (writer && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

//내용
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if(event.target.value !== ""){
      setContentsError("")
    }

    if (writer && password && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  //점수
  const onChangeRating = (event) => {
    setRating(event.target.value);
  }

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && contents) {
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating: Number(rating),
            },
            boardId: String(router.query.boardId),
          },
        });
        console.log("댓글 등록 ");
        console.log(result);
        // console.log(result.data.createBoard._id);
        // console.log(result.data.createBoard._id)
        // router.push(`/boards/${router.query.boardId}`);
        // router.push(`/comments/${result.data.createBoardComment._id}`)
      } catch(error) {
        // alert(error.message)
        alert("등록이 안됐어용")
      }
    }
  };

  const onClickUpdate = async () => {
    try {
      const result = await updateBoardUpdateComment({
        variables: {
          boardCommentId: router.query.boardCommentId,
          password: password,
          updateBoardUpdateInput: {
            title: title,
            contents: contents,
          },
        },
      });
      router.push(`/comments/${result.data.updateBoardUpdateComment._id}`);
    } catch(error) {
      alert(error.message)
    }
  };

  return (
    <BoardCommentUI
      isActive={isActive}
      writerError={writerError}
      passwordError={passwordError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
    />
  );
}