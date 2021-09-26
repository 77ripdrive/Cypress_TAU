let day;
let month;

export function getToday() {
  let today = new Date();
  day = today.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  month = today.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  today = day + "." + month + "." + today.getFullYear();
  return today;
}

export function getTwoDayFuture() {
  let today = new Date();
  day = today.getDate() +2;
  if (day < 10) {
    day = "0" + day;
  }
  month = today.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  today = day + "." + month + "." + today.getFullYear();
  return today;
}

export function getTestId() {
  let today = new Date();
  today = today.getDate() + "." + parseInt(today.getMonth() + 1) + "." + today.getHours() + "." + today.getMinutes();
  return today;
}

export function setTimeNow() {
  let today = new Date();
  // day = today.getDate();
  // if (day < 10) {
  //   day = "0" + day;
  // }
  // month = today.getMonth() + 1;
  // if (month < 10) {
  //   month = "0" + month;
  // }
  today = today.getHours() + ":" + today.getMinutes();
  return today;
}

export function setNextHour(hour) {
  let today = new Date();

  today = parseInt(today.getHours() + hour) + ":00";
  return today;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
