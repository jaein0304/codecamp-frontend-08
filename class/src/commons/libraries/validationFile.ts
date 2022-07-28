export const checkValidationFile = (file?: File) => {
  // 업로드 보내기 전 검증
  if (!file?.size) {
    alert("파일이 없습니다");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다 (제한 : 5MB)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg파일 또는 png 파일만 업로드 가능합니다.");
    return false;
  }
  return true;
};
