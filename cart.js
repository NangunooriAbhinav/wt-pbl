const getCart = () => {
    const cart = window.localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

const generateStars = (rating) => {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars += '<i class="bx bxs-star text-warning"></i>';
      } else {
        stars += '<i class="bx bx-star text-secondary"></i>';
      }
    }
    return stars;
};

const generateColors = (colors) => {
    return colors.map(color => `<i class="bx bxs-circle ${color}"></i>`).join(' ');
};

const generateProductCards = (products) => {
    return products.map(product => `
      <div class="col">
        <div class="card h-100">
          <img src="${product.img}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <div class="rating mb-2">
              ${generateStars(product.rating)}
            </div>
            <p class="card-text d-flex justify-content-between align-items-center">
              <span>&dollar;${product.price.toFixed(2)}</span>
              <div class="colors">
                ${generateColors(product.colors)}
              </div>
            </p>
          </div>
        </div>
      </div>
    `).join('');
};

const cartContainer = document.getElementById('cart-box');
const total_box = document.getElementById('total');
const total = getCart().reduce((acc, product) => acc + product.price, 0);
total_box.innerHTML = total && total.toFixed(2);
cartContainer.innerHTML = generateProductCards(getCart());