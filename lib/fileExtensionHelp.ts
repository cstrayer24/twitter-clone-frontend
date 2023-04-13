const extensionHelper: Function = (fileName: String) => {
  const splitArr = fileName.split(".");

  return splitArr[splitArr.length - 1];
};
export default extensionHelper;
