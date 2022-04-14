export const Dday = (data: any) => {
  const xmasDay: Date | null = data ? new Date(data) : null;
  const now: Date | null = new Date();
  const gap = Number(xmasDay) - Number(now);
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));

  return day;
};

export const ValidNowDate = (data: string) => {
  const date = new Date();
  const temp = Number(data.substring(0, 10).split("-").join(""));
  const nowDate = Number(String(date).substring(0, 10).split("-").join(""));

  if (temp < nowDate) return true;
  else return false;
};

export const SetDateFunc = (data: string) => {
  const temp = data.substring(0, 10).split("-");

  return `${temp[0]}년 ${temp[1]}월 ${temp[2]}일`;
};

export const CheckPrevDate = (prev: string, data: string) => {
  const prevTemp = Number(prev.substring(0, 10).split("-").join(""));
  const dataTemp = Number(data.substring(0, 10).split("-").join(""));

  if (prevTemp < dataTemp) return true;
  else return false;
};
