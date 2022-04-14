export const getTime = (time: string) => {
  const temp = time.substring(11, 16);
  const timeArr = temp.split(":");

  let hour: number | string = Number(timeArr[0]);
  const min = timeArr[1];
  let state = "";

  if (hour > 12) {
    hour - 12 === 0 ? (hour = "00") : (hour -= 12);
    state = "pm";
  } else {
    state = "am";
  }

  return `${hour}:${min} ${state}`;
};
