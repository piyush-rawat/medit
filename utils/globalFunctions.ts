export const convertSecondsToMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  //   return `${minutes} minute(s) and ${remainingSeconds} second(s)`;

  let m;
  let s;

  if (minutes < 10) {
    m = `0${minutes}`;
  } else {
    m = minutes;
  }

  if (remainingSeconds < 10) {
    s = `0${remainingSeconds}`;
  } else {
    s = remainingSeconds;
  }

  // return `${minutes}:${remainingSeconds}`

  return `${m}:${s}`;
};
