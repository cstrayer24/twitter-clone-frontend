const cleanArr = (arr: String[]) => {
  const step1 = arr.join("");
};

const imgHelper: Function = (filePath: String) => {
  const filePathArr = JSON.stringify(filePath).split("\\");

  for (let i: number = 0; i < filePathArr.length; i++) {
    if (i === filePathArr.length - 1) {
      const fileName = filePathArr[i].substring(0, filePathArr[i].length - 1);
      return fileName;
    }
  }
};

export default imgHelper;
