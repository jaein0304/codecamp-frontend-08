import { ChangeEvent, useState } from "react";
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardCommentUI from './CommentWrite.presenter'
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from './CommentWrite.queries'
import { IBoardCommentWriteProps } from "./CommentWrite.types";


export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  // const [buttonColor, setButtonColor] = useState(false);

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
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }

    if (event.target.value && password && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  //비밀번호
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (writer && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  //내용
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if (writer && password && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  //점수
  const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };

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
          // refetchQueries: [
          //   {
          //     query: FETCH_BOARD_COMMENTS,
          //     variables: { boardId: router.query.boardId },
          //   },
          // ], //작동해ㅐㅐㅐㅐ
        });
        alert("댓글이 등록되었습니다.");
        console.log("댓글 등록 ");
        console.log(result);
      } catch (error) {
        // alert(error.message)
        alert("등록이 안됐어용");
      }
    }
  };

  const onClickUpdate = async () => {
    try {
      const result = await updateBoardUpdateComment({
        variables: {
          updateBoardUpdateInput: {
            writer,
            contents,
            rating,
          },
          password: password,
          boardCommentId: router.query.boardCommentId,
        },
      });
      router.push(`/comments/${result.data.updateBoardUpdateComment._id}`);
    } catch(error) {
      alert("업데이트 오류")
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