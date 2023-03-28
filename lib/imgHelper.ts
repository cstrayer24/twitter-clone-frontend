const cleanArr = (arr: String[]) => {
  const step1 = arr.join("");
  console.log(step1);
};

const imgHelper: Function = (filePath: String) => {
  const filePathArr = JSON.stringify(filePath).split("\\");
  console.log(filePathArr);
  //   cleanArr(filePathArr);
  console.log(filePathArr.length);
  console.log(filePathArr[4]);

  for (let i: number = 0; i < filePathArr.length; i++) {
    if (i === filePathArr.length - 1) {
      const fileName = filePathArr[i].substring(0, filePathArr[i].length - 1);
      return fileName;
    }
  }
};

export default imgHelper;
