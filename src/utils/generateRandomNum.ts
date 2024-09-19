function generateRandomNum(max: number): number {
  const num = Math.floor(Math.random() * max);

  return num;
}

export default generateRandomNum;
