export const getDate = () => {
  const date = new Date();
  const yyyy = date.getFullYear(); // yy면 22년, yyyy면 2022년이라 이해 하기
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
