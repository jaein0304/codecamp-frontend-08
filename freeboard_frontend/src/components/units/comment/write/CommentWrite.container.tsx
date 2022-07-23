import { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentUI from "./CommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { IBoardCommentWriteProps } from "./CommentWrite.types";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);
  const [boardCommentId, setBoardCommentId] = useState();

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  // 작성자
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

  // 비밀번호
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

  // 내용
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

  // 점수 // 지우면 다른곳에서 에러나는데
  const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
    // setRating(event.target.value);
  };

  // 댓글 등록 버튼
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
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating: Number(rating),
            },
            boardId: String(router.query.boardId),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
      } catch (error) {
        alert("등록이 안됐어용");
      }
      setWriter(""); // 작성한 댓글 등록 시 초기화
      setPassword("");
      setContents("");
      setRating(0);
    }
    // setWriter(""); // 여기다 선언해도 초기화 가능
  };
  /* ============= 댓글 수정 버튼 함수 ing.. ============= */
  // 수정 버튼 누를 때 데이터 넘겨주기
  const onClickUpdate = async (event: MouseEvent<HTMLImageElement>) => {
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password,
          // boardCommentId: String(boardCommentId),
          boardCommentId: props.el?._id,
          // boardCommentId: String(router.query.boardCommentId),
        },
        refetchQueries: [
          {
            query: UPDATE_BOARD_COMMENT,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      console.log(boardCommentId);
      // setIsOpenUpdateModal(false);
    } catch (error) {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <BoardCommentUI
      isActive={isActive} // 쓰는건가?..
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
      data={props.data}
      writer={writer}
      password={password}
      contents={contents}
      rating={rating}
      setRating={setRating}
    />
  );
}
