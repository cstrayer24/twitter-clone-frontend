const getfile = (file) => {
  const data = new FormData();
  data.append("file", file);
  return data;
};
export default getfile;
