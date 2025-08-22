const products = [{
  name: 'Camera 1',
  url: './img/pexels-abhishek-saini-1415858-2929411.jpg',
  type: 'cameras',
  price: 10,
},
{
  name: 'Camera 2',
  url: './img/pexels-alexfu-1528851.jpg',
  type: 'cameras',
  price: 20,
},
{
  name: 'Smartphone 1',
  url: './img/pexels-delcho-dichev-114220-3659194.jpg',
  type: 'smartphones',
  price: 10,
},
{
  name: 'Smartphone 2',
  url: './img/pexels-imadclicks-30466740.jpg',
  type: 'smartphones',
  price: 30,
},
{
  name: 'Smartphone 3<',
  url: './img/pexels-luckysam-47261.jpg',
  type: 'smartphones',
  price: 40,
},
{
  name: 'Camera 3',
  url: './img/pexels-maxzal-2953179.jpg',
  type: 'cameras',
  price: 50,
},
{
  name: 'Camera 4',
  url: './img/pexels-pixabay-45889.jpg',
  type: 'cameras',
  price: 60,
},
{
  name: 'Game 1',
  url: './img/search.svg',
  type: 'games',
  price: 10,
},
{
  name: 'Game 2',
  url: './img/shopping-cart.svg',
  type: 'games',
  price: 20,
},
{
  name: 'TV 1',
  url: './img/LED.jpg',
  type: 'televisions',
  price: 10,
},
{
  name: 'TV 2',
  url: './img/tv.jpg',
  type: 'televisions',
  price: 30,
},
{
  name: 'Camera 4',
  url: './img/pexels-abhishek-saini-1415858-2929411.jpg',
  type: 'cameras',
  price: 80,
},
{
  name: 'Smartphone 4',
  url: './img/pexels-luckysam-47261.jpg',
  type: 'smartphones',
  price: 100,
},
{
  name: 'Camera 5',
  url: '/img/pexels-pixabay-45889.jpg',
  type: 'cameras',
  price: 90,
},
{
  name: 'TV 3',
  url: './img/LED.jpg',
  type: 'televisions',
  price: 100,
},
{
  name: 'TV 4',
  url: './img/tv.jpg',
  type: 'televisions',
  price: 80,
}
]

// Get DOM Elements
const productsWrapperEl = document.getElementById('products-wrapper')
const checkEl = document.querySelectorAll('.check')
const filtersContainer = document.getElementById('filters-container')
const searchInput = document.getElementById('search')
const cartButton = document.getElementById('cartButton')
const cartCount = document.getElementById('cartCount')

// Init cart item count
let cartItemCount = 0
const productsEl = []

products.forEach((product) => {
  const productEl = createProductElement(product)
  
  productsEl.push(productEl)
  productsWrapperEl.appendChild(productEl)
})

function createProductElement(product) {
  const productEl = document.createElement('div')
  productEl.className = 'item space-y-2 flex flex-col'
  productEl.innerHTML = `
    <div class="bg-gray-100 flex justify-center grow-1 relative overflow-hidden group cursor-pointer  border">
        <img 
          src="${product.url}"
          alt="${product.name}"
          class="w-full h-full object-cover" 
        />
        <span class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 transition translate-y-full group-hover:translate-y-0">Add To Cart</span>
    </div>
    <p class="text-xl">${product.name}</p>
    <strong>$${product.price.toLocaleString()}</strong>
  `
  productEl.querySelector('.status').addEventListener('click', addToCart)

  return productEl
}

function addToCart(e) {
  const statusEl = e.target
  console.log(statusEl);
  if(statusEl.classList.contains('added')) {
    // Remove from cart
    statusEl.classList.remove('added')
    statusEl.innerText = 'Add to cart'
    statusEl.classList.add('bg-gray-800')
    statusEl.classList.remove('bg-red-800')
    cartItemCount--
  } else {
    // Add to cart
    statusEl.classList.add('added')
    statusEl.innerText = 'Remove from cart'
    statusEl.classList.remove('bg-gray-800')
    statusEl.classList.add('bg-red-800')

    cartItemCount++
  }

  cartCount.innerText = cartItemCount.toString()
  
}

function filterProducts(e) {
  
  const searchTerm = searchInput.value.trim().toLowerCase()
  const checkedCategory = Array.from(checkEl)
    .filter((check) => check.checked)
    .map(check => check.id)

  // Loop over products and check for matches
  productsEl.forEach((productEl, index) => {
    const product = products[index]
    
    // Check to see if product matches searched or checked items
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm) || product.type.includes(searchTerm)
    const isInCheckedCategory = checkedCategory.length === 0 || checkedCategory.includes(product.type)

    // Show or hide products based on matches
    if(matchesSearchTerm && isInCheckedCategory) {
      productEl.classList.remove('hidden')
    } else {
      productEl.classList.add('hidden')
    }

      
  })
}

filtersContainer.addEventListener('change', filterProducts)
searchInput.addEventListener('input', filterProducts )

