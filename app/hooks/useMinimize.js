const useMinimize = (text, size) => {
  if (text.length <= size) return text;
  else return String(text).substring(0, size) + "...";
};

export default useMinimize;
