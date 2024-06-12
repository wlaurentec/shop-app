/*
* Calculate the total price of an array of products
* @param {Array} products
* @return {Number} total price
*/

export const totalPrice = (products) => {
  let total = 0;
  products.forEach((product) => {
    total += product.price;
  });
  return total;
}