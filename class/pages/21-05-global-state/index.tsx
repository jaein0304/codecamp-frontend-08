import BoardWrite from "../../src/components/units/21-global-state/BoardWrite.contatiner";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { isEditState } from "../../src/commons/store";

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true); // 여기변경
  }, []);

  return (
    <>
      <BoardWrite />
    </>
  );
}
