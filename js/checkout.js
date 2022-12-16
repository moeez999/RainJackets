var storejacketData = JSON.parse(localStorage.getItem("cartItems"));

displayCart(storejacketData);
function displayCart(displayArray) {
  document.querySelector(".p-d").innerHTML = "";
  // console.log(displayArray);
  displayArray.map((element, index) => {
    let product = getProductById(element.productId);
    // console.log(product);
    let container = document.createElement("div");
    let template = `                <div class="product-details" data-product=${
      product.id
    }>
    <img class="cart-img" src="${product.productimg}">
    <div>
        <h2 class="p-name">${product.productname}</h2>
        <p class="size">${element.size}</p>
    </div>
    <div class="ad-re">
    <div class="product1-lable"></div>
    <div class="product1-price"></div>
    <button class="plus" onclick="addItem(event, '${
      product.productprice
    }')" >+</button>
    <input class="amount" type="amount" id="${"input-" + index}" value="${
      element.quantity
    }">
    <button class="minus" onclick="subtractItem(event,'${
      product.productprice
    }')">−</button>
   </div>
    <p class="price pricing" id='${"price-" + product.id}'>${
      product.productprice * element.quantity
    }</p>
    <p>$</p>
   <div class="remove-two">❌</div>
   
   </div>
   <div class="border-width">
   <div class="border-bottom"></div>
   </div>
   

   `;
    container.innerHTML = template;
    document.querySelector(".p-d").append(container);

    // subPlusTotal();
    //   debugger;
    //   let input = document.querySelector(".amount");

    //   let priceInput = parseInt(product.productprice) * parseInt(input.value);
    //   let subTotal = document.querySelector(".sub-total");
    //   subTotal.innerHTML = priceInput + parseInt(subTotal.innerHTML);
    //   let shippingFee = document.querySelector(".shipping");

    //   //
    //   let totalPrice = document.querySelector(".total");
    //   totalPrice.innerHTML =
    //     parseInt(subTotal.innerHTML) + parseInt(shippingFee.innerHTML);
  });
  subPlusTotal();
}

//add or remove

// function addItem(productId, index) {
//   let input = document.querySelector(`[data-product='${productId}']`);
//   input.querySelector(".amount").value =
//     +input.querySelector(".amount").value + 1;
//   console.log(productId);
//   console.log(input);

//   qty = input.querySelector(".amount").value;
//   let product = getProductById(productId);
//   let price = document.querySelector(`#price-${productId}`);
//   price.innerHTML = "$" + product.productprice * qty;

//   // let subTotal = document.querySelector(".sub-total");
//   // subTotal.innerHTML = 0 + price.innerHTML;
// }

function addItem(e, productprice) {
  // debugger;
  let x = e.target;

  let rate = x.parentElement
    .closest(".product-details")
    .querySelector(".price");
  let input = x.parentElement
    .closest(".product-details")
    .querySelector(".amount");

  let u = x.parentElement.closest(".product-details");
  console.log(u);
  let w = u.querySelector(".size").innerHTML;
  // console.log(x.parentElement.closest(".product-details"));

  input.value = parseInt(input.value) + 1;
  rate.innerHTML = parseInt(productprice) * parseInt(input.value);
  subPlusTotal();
  // debugger;
  let filterItems = storejacketData.filter((itemSave) => {
    if (itemSave.productId == u.dataset.product && itemSave.size == w) {
      return (itemSave.quantity = input.value);
    }
  });

  filterItems = filterItems[0];
  let productIndex = storejacketData.indexOf(filterItems);
  storejacketData[productIndex] = filterItems;

  localStorage.setItem("cartItems", JSON.stringify(storejacketData));
  // console.log(storejacketData);
}

function subtractItem(e, productprice) {
  if (input == 0) {
  } else {
    let x = e.target;
    let product = getProductById(e);
    let rate = x.parentElement
      .closest(".product-details")
      .querySelector(".price");
    let input = x.parentElement
      .closest(".product-details")
      .querySelector(".amount");
    let u = x.parentElement.closest(".product-details");
    // console.log(u);
    let w = u.querySelector(".size").innerHTML;

    if (input.value == 0) {
      alert("Quantity should be greater than 0");
      input.value = 0;
    } else {
      input.value = parseInt(input.value) - 1;
    }

    rate.innerHTML = parseInt(productprice) * parseInt(input.value);
    subPlusTotal();

    let filterItems = storejacketData.filter((itemSave) => {
      if (itemSave.productId == u.dataset.product && itemSave.size == w) {
        return (itemSave.quantity = input.value);
      }
    });

    filterItems = filterItems[0];
    let productIndex = storejacketData.indexOf(filterItems);
    storejacketData[productIndex] = filterItems;

    localStorage.setItem("cartItems", JSON.stringify(storejacketData));
    // console.log(storejacketData);
  }

  function subPlusTotal() {
    let sum = 0;
    let priceOne = document.querySelectorAll(".pricing");
    let shippingFee = document.querySelector(".shipping-price").innerHTML;
    shippingFee = parseInt(shippingFee);
    // console.log(priceOne);

    priceOne.forEach((element) => {
      let subtotal = element.innerHTML;
      // console.log(element);
      add = subtotal.replace("$", "");
      sum = sum + parseInt(add);
    });
    sum = sum + shippingFee;

    let total = document.querySelector(".total");
    total.innerHTML = sum;
  }
}

// let priceInput = parseInt(productprice) * parseInt(input.value);
// let subTotal = document.querySelector(".sub-total");
// subTotal.innerHTML = priceInput + parseInt(subTotal.innerHTML);
// let shippingFee = document.querySelector(".shipping");
// let totalPrice = document.querySelector(".total");

// totalPrice.innerHTML =
//   parseInt(subTotal.innerHTML) + parseInt(shippingFee.innerHTML);

// function subtractItem(productId) {
//   let input = document.querySelector(`[data-product='${productId}']`);
//   if (input.value == 1) {
//     alert("Quantity should be greater than 0");
//     input.value = 1;
//   } else {
//     input.querySelector(".amount").value =
//       +input.querySelector(".amount").value - 1;
//   }

//   qty = input.querySelector(".amount").value;
//   let product = getProductById(productId);
//   let price = document.querySelector(`#price-${productId}`);
//   price.innerHTML = "$" + product.productprice * qty;
// }

let deleteButton = document.querySelectorAll(".remove-two");

deleteButton.forEach((x) =>
  x.addEventListener("click", function (e) {
    // debugger;
    let target = e.target;

    let u = target.parentElement.closest(".product-details");
    // console.log(u);
    let w = u.querySelector(".size").innerHTML;

    let removeFilterItems = storejacketData.filter((itemRemove) => {
      if (itemRemove.productId == u.dataset.product && itemRemove.size == w) {
        return u;
      }
    });
    removeFilterItems = removeFilterItems[0];
    let productIndex = storejacketData.indexOf(removeFilterItems);
    // console.log(removeFilterItems);

    storejacketData.splice(productIndex, 1);
    console.log(storejacketData);

    localStorage.setItem("cartItems", JSON.stringify(storejacketData));

    target.parentElement.remove();

    // const index = storejacketData.indexOf(removeFilterItems);
    // if (index > -1) {
    //   //
    // }

    // removeFilterItems.splice();

    // const index = storejacketData.indexOf(removeFilterItems);
    // if (index > -1) {
    //   removeFilterItems.splice(index, 1);
    // }

    // console.log(removeFilterItems);

    // localStorage.setItem("cartItems", JSON.stringify(removeFilterItems));

    // removeFilterItems.parentElement.removeItem();
  })
);

// function subPlusTotal(idx) {
//   let total = 0;
//   for (let i = 0; i < idx; i++) {
//     total += i;
//   }
//   return total;
// }

// let priceOne = document.querySelectorAll(".price")[idx].innerHTML;

// priceOne.forEach((element) => {
//   let subtotal = element.querySelector(".subtotal").innerHTML;

//   subtotal = priceOne + 0;
// });
