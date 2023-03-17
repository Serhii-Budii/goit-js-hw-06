const categoriesElements = document.querySelector("#categories");
const itemOfCategoriesElements = categoriesElements.querySelectorAll(".item");

console.log(`Number of categories: ${itemOfCategoriesElements.length}`); 

itemOfCategoriesElements.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
