//break and continue
let score = [10, 20, 30, 40, 50, 0, 100, 48];
for (let i = 0; i < score.length; i++) {
  console.log("Scores: " + score[i]);

  if (score[i] == 0) {
    break;
  }
}
console.log("Break and continue");

let names = ["ram", "hari", "geeta", "sita"];
for (let i = 0; i < names.length; i++) {
  if (names[i] == "geeta") {
    continue;
  }
  console.log(names[i]);
}
console.log("Geeta is skipped");
