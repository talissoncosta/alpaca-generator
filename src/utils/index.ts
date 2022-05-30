const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const getRandomProperty = (obj: any) => {
  const keys = Object.keys(obj);
  const randIndex = Math.floor(Math.random() * keys.length);
  return obj[randIndex]
};

export { capitalize, getRandomProperty };
