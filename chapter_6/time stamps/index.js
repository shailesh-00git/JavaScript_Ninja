// time stamps
// TO GET past or future times
const before = new Date("August 6 2025 10:20:12");
//to get new time stamp current time
const now = new Date();
console.log(` time stamp of past ${before.getTime()}`);
console.log(` time stamp of now ${now.getTime()}`);

// to calculate differende
diff = now.getTime() - before.getTime();
console.log(diff); // it gives diiferenc in mili-second

//convert second into min,hr,day
const min = Math.floor(diff / 1000 / 60);
const hr = Math.round(min / 60);
const day = Math.round(hr / 24);

console.log(min, hr, day);
console.log(`This blog was postedd ${day} days ago`);

//converting timestamps into date objects
const timestamp = 1754454912000;
console.log(new Date(timestamp)); //if we store it into a variablr the get the year,day,etc
