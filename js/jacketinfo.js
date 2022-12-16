let id = getParameterByName("id");
let product = getProductById(id);

showItems(product);
// debugger;
function showItems(product, productId, size) {
  document.querySelector(".jacket-info").innerHTML = "";

  // console.log(product);
  let container = document.createElement("div");

  let template = ` <div class="jacket-information">
        <div class="red-jacket-img"><img class="jacket-response r-img" src="${
          product.productimg
        }" alt=""></div>
        <div>
            <h2 class="jack-name">${product.productname}</h2>
            <p class="jack-desc">${product.productdescription}</p>
            <p class="jack-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et rhoncus nisi. Suspendisse <br> rhoncus
                tortor et erat fermentum, in convallis turpis semper. Maecenas sed feugiat mi. <br> Quisque faucibus
                eleifend velit in auctor. Quisque suscipit tellus urna, nec commodo nisi <br> lacinia vel. Suspendisse ac
                consequat justo. Nunc diam purus, sagittis a ex vitae, vulputate <br> commodo lorem. Nullam lobortis
                laoreet neque, quis finibus tortor lacinia vel. Nullam quis <br> turpis ex. Etiam hendrerit fermentum
                eros quis rutrum. Vivamus vehicula euismod sapien <br> quis ultricies.
            </p>
            <div class="size-qty">
              <div class="size-item-div">
                  <a class="size-item small" href="" data-size="s">S</a>
                  <a class="size-item medium" href=""data-size="m">M</a>
                  <a class="size-item large" href=""data-size="l">L</a>
                  <a class="size-item x-large" href=""data-size="xl">XL</a>
              </div>
              <div class="ad-re">
                <button class="plus" onclick="addItem('${
                  "input-" + productId / size
                }')" >+</button>
                <input class="amount" type="amount" id="${
                  "input-" + productId / size
                }" value="1">
                <button class="minus" onclick="subtractItem('${
                  "input-" + productId / size
                }')">-</button>
                          </div>
                          
            </div>
            <a class="shopping-button-div shopping-button trigger-error" href=""><img class="cart-img-w"  src="./images/333.png"> Add to shopping bag</a>
             
            </div>
        </div>
            
               
            
        </div>
    
  `;
  container.innerHTML = template;
  document.querySelector(".jacket-info").append(container);
}

function getParameterByName(id, url = window.location.href) {
  id = id.replace(/[\[\]]/g, "\\$&");
  let regex = new RegExp("[?&]" + id + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let named = document.querySelectorAll(".jack-name");
let imaged = document.querySelectorAll(".r-img");
let size = document.querySelectorAll(".size-item");

size.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);
    let a = e.target;

    document.querySelectorAll(".size-item.is-active").forEach((element) => {
      element.classList.remove("is-active");
    });

    a.classList.add("is-active");
  });
});

function addItem(InputId) {
  let input = document.getElementById(InputId);
  input.value = parseInt(input.value) + 1;
}

function subtractItem(InputId) {
  let input = document.getElementById(InputId);
  if (input.value == 1) {
    alert("Quantity should be greater than 0");
    input.value = 1;
  } else {
    input.value = parseInt(input.value) - 1;
  }
}

let shoppingButton = document.querySelector(".shopping-button-div");

let getAllData = function (e) {
  // debugger;
  e.preventDefault();
  // let name = document.querySelectorAll(".jack-name").innerHTML;
  // let pictureJack = document.querySelector(".r-img").src;
  // let price = document.querySelector(".product-price").innerHTML;
  let quantity = document.querySelector(".amount").value;
  let productId = getParameterByName("id");
  let size = document.querySelector(".size-item.is-active");
  size = size.getAttribute("data-size");

  let product = {
    quantity,
    productId,
    size,
  };
  console.log(product);

  let cartItems = localStorage.getItem("cartItems");

  if (cartItems !== null) {
    cartItems = JSON.parse(cartItems);

    let t = cartItems.filter(
      (s) => s.productId == product.productId && s.size == product.size
      // s.pictureJack == product.pictureJack &&
      // s.price == product.price &&
      // s.name == product.productname
    );
    console.log(t);

    if (t.length == 0) {
      cartItems.push(product);
    } else {
      cartItems = cartItems.map((sizeCart) => {
        // debugger;
        if (sizeCart.size == t[0].size) {
          console.log(quantity);
          // debugger;
          sizeCart.quantity =
            parseInt(sizeCart.quantity) + parseInt(product.quantity);
        }
        return sizeCart;
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // return cartItems;
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } else {
    let r = [];

    r.push(product);
    localStorage.setItem("cartItems", JSON.stringify(r));
  }

  // console.log(cartItems);

  // localStorage.setItem("cartItems", JSON.stringify(jacketsData));

  // let storeData = JSON.parse(localStorage.getItem("cartItems"));
};

shoppingButton.addEventListener("click", getAllData);
