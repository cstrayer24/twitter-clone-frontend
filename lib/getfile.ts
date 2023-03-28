const getfile = (file) => {
  const data = new FormData();
  data.append("file", file);
  console.log(file);
  return data;
};
export default getfile;
