//template strings
const title = "best award of 2025 ";
const author = "Henry Peter";
const likes = 30;

// string concatination
res =
  "The " + title + "written by " + author + " completes " + likes + " likes";
console.log(res);

//Tempelate literals
res1 = `The ${title} written by ${author} completes ${likes} likes`;
console.log(res1);

//creating HTML templates
let html = `
<h1>${title}</h1>
<p>${author}</p>
<span>${likes}</span>
`;
console.log(html);
