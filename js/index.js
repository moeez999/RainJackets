//Navigation bar
let revealBtn = document.querySelectorAll(".hamburger");
function revealContent(e) {
  let element = e.currentTarget;

  x = element.closest(".list");
  let answer = x.querySelector(".listed");

  if (answer.classList.contains("hidden-content")) {
    answer.classList.remove("hidden-content");
    answer.classList.remove("hidden-content");
  } else {
    answer.classList.add("hidden-content");
  }
}
revealBtn.forEach((element) => {
  element.addEventListener("click", revealContent);
});

//Dynamic Data for Jackets
//for desktop view

let currentIndex = 0;
let jacketsData = showData();
showJackets(jacketsData, currentIndex);

function nextIndex() {
  currentIndex = (currentIndex + 1) % jacketsData.length;
  showJackets(jacketsData, currentIndex);
}
function prevIndex() {
  currentIndex = (currentIndex - 1 + jacketsData.length) % jacketsData.length;
  showJackets(jacketsData, currentIndex);
}

function showJackets(jacketArray, idx) {
  document.querySelector(".jacket-image-div").innerHTML = "";
  const element = jacketArray[idx];

  let container = document.createElement("div");

  let template = `
  <div >
    <img
    class="jacket-image "
    src="${element.productimg}"
    alt=""
      />
      <h2 class="jacket-name">${element.productname}</h2>
      <p class="description">${element.productdescription}</p>
      <div class="price-arrow">
    <div class = "dollar" >
      <p class="jacket-price">${element.productprice}</p>
      <p>$</p>
    </div>
    <a href="./jacketinfo.html?id=${element.id}"><img class="arrow-img" src="./images/XMLID 1522.png" alt="" /></a>
      </div>
  </div>`;
  container.innerHTML = template;
  document.querySelector(".jacket-image-div").append(container);
}
document.getElementById("next").addEventListener("click", nextIndex);
document.getElementById("prev").addEventListener("click", prevIndex);

//for mobile view

showJack(jacketsData, currentIndex);

function showJack(jackArray) {
  document.querySelector(".jacket-image-div-one").innerHTML = "";

  // for loop template data
  for (let index = 0; index < jackArray.length; index++) {
    const element = jackArray[index];

    let container = document.createElement("div");

    let template = `<div class="flex">
    <img
    class="jacket-image"
    src="${element.productimg}"
    alt=""
  />
  <h2 class="jacket-name">${element.productname}</h2>
  <p class="description">${element.productdescription}</p>
  <div class="price-arrow">
    <p class="jacket-price">${element.productprice}</p>
    <a href="./jacketinfo.html?id=${element.id}"><img class="arrow-img arrow-button" src="./images/XMLID 1522.png" alt="" /></a></div>
  `;
    container.innerHTML = template;
    document.querySelector(".jacket-image-div-one").append(container);
  }
}
