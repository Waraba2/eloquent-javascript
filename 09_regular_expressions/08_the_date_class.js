// Month number starts at 0 and days start at 1. The last four fragments are (hour, minutes,
// seconds, milliseconds). timestamps are stored as the number of milliseconds since 
// 1970 "Unix Time". Methods (getFullYear, getMonth, getDate, getHours, getMinutes, and getSeconds 
// getFullYear, getYear:which gives you the year minus 1900 (98 or 119) and is mostly useless.)
console.log(new Date());
// -> 2024-05-09T16:51:10.502Z

console.log(new Date(2009, 11, 9)); 
// -> 2009-12-09T05:00:00.000Z
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// -> 2009-12-09T17:59:59.999Z

console.log(new Date(2023, 4, 9).getTime()); // Time since Unitx Time
console.log(Date.now()); // same same
// -> 1683604800000
console.log(new Date(1683604800000)); // single areguments passed to Date is treated in milliseconds
// -> 2023-05-09T04:00:00.000Z

// We can now create a date expression from a string
function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003"));
// -> 2003-01-30T05:00:00.000Z

