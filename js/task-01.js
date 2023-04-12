const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);

items.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  const itemsList = element.lastElementChild.children;
  console.log("Elements:", itemsList.length);
});
