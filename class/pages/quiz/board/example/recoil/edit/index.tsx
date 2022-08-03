import BoardWrite, {
  isEditState,
} from "../../../../../../src_quiz/components/units/example/BoardWrite.container";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export default function EditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <BoardWrite />;
}
