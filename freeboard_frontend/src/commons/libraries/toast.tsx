import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
// import { useRef } from "react";
export default function ToastEditor() {
  // const editorRef = useRef();
  // Editor.prototype.getInstance().getHTML();
  // Editor.prototype.getInstance().getMarkdown();
  // console.log(editorRef.current?.getInstance().getHTML());
  return (
    <Editor
      initialValue=""
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
}
