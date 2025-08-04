//dates and times
const now = new Date();
console.log(now);
console.log(`type of now is ${typeof now}`);

//different methods
console.log("getfullyear", now.getFullYear());
console.log("get month", now.getMonth());
console.log("getday", now.getDay());
console.log("gethour", now.getHours());
console.log("getminutes", now.getMinutes());
console.log("getseconds", now.getSeconds());

//time stamp
console.log("time stamp", now.getTime());

//to stringify
console.log("time stamp", now.toDateString());
console.log("time stamp", now.toTimeString());
console.log("time stamp", now.toLocaleDateString());
