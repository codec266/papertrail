// Back-to-Top Script
const bTT = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      bTT.style.display = 'block';
      bTT.style.opacity = '1';
    } else {
      bTT.style.opacity = '0';
      if (window.scrollY == 0) {
        bTT.style.display = 'none';
      }
    }
  });

  bTT.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

// Vector to hold cart items
const cart = [];

// Event listener for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-name');
    const productPrice = button.getAttribute('data-price');
    const productImage = button.getAttribute('data-image');
    addToCart(productName, productPrice, productImage);
  });

// Function to add product to the cart
function addToCart(productName, productPrice, productImage) {
  cart.push({ name: productName, price: productPrice, image: productImage });
  alert(`${productName} has been added to your cart.`);
}

// Function to display all products in the cart
function displayCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = ''; // Clear previous list

  if (cart.length === 0) {
    cartList.innerHTML = '<li class="list-group-item">Your cart is empty.</li>';
    return;
  }

  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex align-items-center';

    // Create an image element
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.style.width = '50px';
    img.style.marginRight = '10px';

    // Add product details
    const text = document.createElement('span');
    text.textContent = `${index + 1}. ${item.name} - $${item.price}`;

    // Append image and text to the list item
    listItem.appendChild(img);
    listItem.appendChild(text);

    // Add the list item to the cart list
    cartList.appendChild(listItem);
  });
}

});