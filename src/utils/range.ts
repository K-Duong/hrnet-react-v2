export const range = (from: number, to: number): number[] => {
  const list: number[] = [];
  for (let i = from; i < to; i++) {
    list.push(i);
  }
  return list;
};