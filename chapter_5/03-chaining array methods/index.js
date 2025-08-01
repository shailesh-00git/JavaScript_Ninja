const products = [
  { name: "shoes", price: 1300 },
  { name: "shirt", price: 500 },
  { name: "cap", price: 200 },
  { name: "outer", price: 1000 },
];
// const filtered = products.filter((product) => {
//   return product.price > 800;
// });
// const promos = filtered.map((product) => {
//   return `The ${product.name} is ${product.price / 2} NRS`;
// });
const promos = products
  .filter((product) => {
    return product.price > 800;
  })
  .map((product) => {
    return `The ${product.name} is ${product.price / 2} NRS`;
  });
console.log(promos);
