const postContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader')
const filter = document.getElementById('filter')

let limit = 5
let page = 1

// Fetch posts from API
async function getPost() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)

  const results = await response.json()
  return results
  
}

function showLoading() {
  loading.classList.add('show')
  page++
  showPost().then(() => {
    loading.classList.remove('show')
  })
}

// Show Post
async function showPost() {
  const posts = await getPost()
  posts.forEach(post => {
    const postEl = document.createElement('div')
    postEl.classList.add('post')
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `
  postContainer.appendChild(postEl)
  })
}
showPost()

function filterPosts(e) {
  const term = e.target.value
  const posts = document.querySelectorAll('.post')
  posts.forEach((res) => {
    const title = res.querySelector('.post-title').innerText
    const body = res.querySelector('.post-body').innerText
    if(title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      res.style.display = 'flex'
    } else {
      res.style.display = 'none'
    }
    
  })
  

}

window.addEventListener('scroll', () => {
  console.log(document.documentElement.scrollTop);
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement
  console.log(scrollTop, scrollHeight, clientHeight);
  if(scrollTop + clientHeight >= scrollHeight -5 ) {
    showLoading()
  }
})
filter.addEventListener('input', filterPosts)