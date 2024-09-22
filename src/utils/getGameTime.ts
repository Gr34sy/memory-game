function getGameTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  const timeString = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  return timeString;
}

export default getGameTime;
