import { useEffect } from "react";
import BoardWrite, {
  isEditState,
} from "../../../../../src_quiz/components/units/example/BoardWrite.container";
import { useRecoilState } from "recoil";

export default function WritePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(false);
  }, []);

  return <BoardWrite />;
}
