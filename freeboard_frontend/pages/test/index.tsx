import { useRef } from "react";
import dynamic from "next/dynamic";
// Toast 에디터
// import { Editor } from "@toast-ui/react-editor";
// import "@toast-ui/editor/dist/toastui-editor.css";

const ToastEditor = dynamic(() => import("../../src/commons/libraries/toast"), {
  ssr: false,
});
export default function Test() {
  // Editor DOM 선택용
  const editorRef = useRef();

  // 등록 버튼 핸들러
  const handleRegisterButton = () => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    console.log(editorRef.current?.getInstance().getMarkdown());
  };

  return (
    <div>
      <h3>### Editor Toast</h3>
      <ToastEditor
        ref={editorRef} // DOM 선택용 useRef
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="300px" // 에디터 창 높이
        initialEditType="wysiwyg" //
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        useCommandShortcut={false} // 키보드 입력 컨트롤 방지
      ></ToastEditor>

      <button onClick={handleRegisterButton}>등록</button>
    </div>
  );
}
