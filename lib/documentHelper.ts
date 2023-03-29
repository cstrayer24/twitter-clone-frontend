const documentHelper: Function = (thingTodo: (...args: number[]) => any) => {
  if (typeof document != "undefined") {
    thingTodo;
  }
};
export default documentHelper;
