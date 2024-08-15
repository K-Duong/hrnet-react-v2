export const range = (from, to) => {
  const list = [];
  for (let i = from; i < to; i++) {
    list.push(i);
  }
  return list;
};