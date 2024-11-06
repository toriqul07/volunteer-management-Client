const getDataFromLs = () => {
  return JSON.parse(localStorage.getItem("userInfo"))
};

const setDataToLs = (user) => {
  localStorage.setItem("userInfo", JSON.stringify(user));
};

const removeDataFromLs = () => {
  localStorage.removeItem("userInfo");
};

export { getDataFromLs, removeDataFromLs, setDataToLs };
