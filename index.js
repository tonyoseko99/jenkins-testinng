const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const millisecond = date.getMilliseconds();
const dateString = `${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}`;
console.log(dateString);

