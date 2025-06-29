let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeItem(${index})">Remove</button>`;
    cartItems.appendChild(div);
  });

  totalEl.textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

window.onload = function () {
  displayCart();
};
