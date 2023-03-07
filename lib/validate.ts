const validate = (method, req, extras?: any[]): boolean => {
  if (req.method !== method) {
    return false;
  }
  if (extras !== undefined) {
    for (let i: number = 0; i < extras.length; i++) {
      if (!extras[i]) {
        return false;
      }
    }
  }
  return true;
};
export default validate;
