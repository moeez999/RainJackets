let jacketsData = showData();
showProduct(data);

function showProduct(productArray) {
  document.querySelector(".products").innerHTML = "";

  // for loop template data
  for (let index = 0; index < productArray.length; index++) {
    const element = productArray[index];

    let container = document.createElement("div");

    let template = ` <div class="flex">
<img class= "product-img"src="${element.productimg}" alt="">
<h2 class="product-name">${element.productname}</h2>
<p class="product-description">Recycled Material</p>
<div class = "dollar" >
<p class="product-price">${element.productprice}</p>
<p>$</p>
</div>
<a class= "shopnow-button"href="./jacketinfo.html?id=${element.id}">Shop now</a>
</div>
`;
    container.innerHTML = template;
    document.querySelector(".products").append(container);
  }
}
