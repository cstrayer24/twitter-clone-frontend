export const isLoggedIn = (): boolean => {
  if (typeof document === "undefined") {
    return null;
  }
  return document.cookie.includes("isLoggedIn=1");
};
